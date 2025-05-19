"use server";

import { createAdminClient } from "@/lib/appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { Query, ID } from "node-appwrite";
import { parseStringify } from "@/lib/utils";
import { cookies } from "next/headers";

const getUserByEmail = async (email: string) => {
  const { databases } = await createAdminClient();

  const result = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    [Query.equal("email", [email])],
  );

  return result.total > 0 ? result.documents[0] : null;
};

const handleError = (error: unknown, message: string) => {
  console.log(error, message);
  throw error;
};

export const sendEmailOTP = async ({ email }: { email: string }) => {
  const { account } = await createAdminClient();

  try {
    const session = await account.createEmailToken(ID.unique(), email);
    return session.userId;
  } catch (error) {
    handleError(error, "Failed to send email OTP");
  }
};

export const createAccount = async ({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) => {
  const existingUser = await getUserByEmail(email);

  const accountId = await sendEmailOTP({ email });

  if (!accountId) throw new Error("Failed to send an OTP");
  if (!existingUser) {
    const { databases } = await createAdminClient();

    await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      {
        fullName,
        email,
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACUCAMAAADhypYgAAAAOVBMVEWVu9////+QuN77/P6FstuMtt31+PyhwuLw9frs8vmwzOfh6/XJ2+7Z5vO1z+iavuDC1+yoxuTP4PB8N89QAAAE00lEQVR4nO2c63KjMAyFjcDYgAE77/+wC8mmgVy6sXWotJl+P9uZljO2ZUmWZAwO6n2Vge8J+M+BzCFHxkqYpb/5CTSPuTqqapzVLUqRDpVKhhIdVTUoE2ILdSxKrPS3b2lOpTqq6qRIiZ3qciH1pEYJua5cR1V1Tss5oSKDdWNUIoSmlieknXQoKbtBdkui4oannnHSL9QqvC7+guhYEnJ8HVWlwHBRRAiJ8kJMVgzyCi8vZEboWPaWtA6bHU09J0j7KQ3LO7nRNdJCMDqqSlgIxviuCBtgCzG+K1H2kFjAtX5hlBWCOuvip71hO4xXalkhhBMie9hnnBBRB5gcToio/aWEE5JEhfCjwy8holHir5BfIUcJ+ZTDbpDmV1LHx1yIxuKECHu/n+I0NpBk0IqXFfIxgRUqGySeD6IJJUT6jQSXRZHVYSxKiHimEWR/ha0vp1Jgj3jdwMcksU3CCEnSOozBCJFWsQDJNXbSKpYrkVFPc+Mk//RGPUJILy3DYIJE4fDwwgy4SQYFBQPGAN56orSGlY+pRTGOvbcGDUdkWRK2lxJULMiyt7iFZzp2Ft9u6bBZZvWAecdd3vO98ilVpsay/C1FFczkGMe91bMgS+TOyNON0tH6nuLjXkt/+Z7yKv+TrgUpLoEQLnh4pDR3Kp0pfaSs0l9Lff8GcgVPJV6T6b1Ssrn0bawz2ZbrJP3Fr8g8JqP0976C8mLFQeMBuZClRLGOLCWqdWR0uirsbd1D5p1wsQ5Gpw7axkb9P+PFbpttsHokUZO2vcNk4reLUsftctCQGiVSzoMF2q03TvR6f9WBtt/dtDpGDZCZp8tO8rvTa5vYtQ9i6raLzXYX0nxx0Lppljw0i4o+fEXrfl8CZ62LY9f5tj7T+q4bo7O7RAOlL0ezDb2QFqK5j7tbw9+7gGTJ9VOMIcQ49Y7ujzVNO4d5iP1MP6xlsVJTGO5TJ+2jUaUN978y4eEPDGH6SStmbTo9qDifgSG9naOyaXhmENrhlOzPJLosTcPLGMqH92wpNeH13xgm+gEpzeS/vSV8/28p1Hw/Cqb209G5FXqjEdT3329zsm9MtPHHmrA3G3Pb4MzzD1l+6B7O+HMObN/NGeIyxOTmndFazNbsUnw/YjnMQc4dRtONYbk++pScS6lfLpQw5j0/HKakJC263ugrviRff0xygjjDT8qoD0kX4er5M5Qc8G7NHX5SBj6liikCygceqjTMt/RSWvAVT6DSxXzAjT4W1lycSwf1H+UWBLwkuO6KfLD9GLB+l3w8UIbApX4Deb1L7izs3gJV8pcxwGSwK8t44OrScI1UZcDquWT8xRswz5FfRsoDVYSaOcYXDypbj5lpxgGUUOHX9XIB1QUjxv7xwAwNZE4qRYCpQxW+DlcwV6JUtL4FI0TcaKHMFqQbjAck5YhoPeICaQMoKfFD4xFOCqxjnQNAiGQC5QYglaLBaEHMFqaFlQuiBVaB0YLE7aTAaEHmAZO0hgt8IaDBxFzYN6IGl3GF7TbixsfyYA+f5TW04WC3xqHmnnBhz02Re6raw364knoEvYf9KAob3s3lV8hflFzsgKtdWsAVrg4VYdUKc0qSFg+F7aPghuVxYb7t6gh0V5jBrhafke01Sr+D3mC+iP4/K/IHGhZLVmbo+8YAAAAASUVORK5CYII=",
        accountId,
      },
    );
  }

  return parseStringify({ accountId });
};
export const verifySecret = async ({ 
  accountId, 
  password 
}: { 
  accountId: string; 
  password: string;
}) => {
  try {
    const { account } = await createAdminClient();
    const session = await account.createSession(accountId, password);
    
    (await cookies()).set('appwrite-session', session.secret, {
      path: '/', 
      httpOnly: true,
      sameSite: 'strict',
      secure: true
    });
    
    return parseStringify({ sessionId: session.$id });
  } catch (error) {
    handleError(error, "Failed to verify OTP");
  }
};