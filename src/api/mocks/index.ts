import { env } from "@/env";
import {setupWorker} from "msw/browser"

export const worker = setupWorker();
const isEnvTest: boolean = env.MODE === 'test';

export async function enableMSW(){
  if(isEnvTest) {
    return await worker.start();
  }
  return;
}