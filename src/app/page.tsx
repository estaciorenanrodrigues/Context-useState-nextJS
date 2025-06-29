'use client';
import { StatesProvider } from "../contexts/Context";
import { Arena } from "./Components/Arena";

export default function Home() {
  return (
    <>
      <StatesProvider>
        <Arena />
      </StatesProvider>
    </>
  );
}
