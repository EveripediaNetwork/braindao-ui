import { component$, useStore } from "@builder.io/qwik";
import { HamburgerIcon } from "../icons/HamburgerIcon";

export const MobileHambuger = component$(() => {
  const store = useStore({ isOpen: false });
  return (
    <>
      <button onClick$={() => (store.isOpen = !store.isOpen)}>
        <HamburgerIcon />
      </button>
      {store.isOpen && (
        <div class="absolute top-20 z-20 right-0 bg-black/50 backdrop-blur-lg w-screen border-b-pink-400 border-b-2">
          <ul class="flex flex-col  divide-y-[1px] max-w-xl mx-auto divide-white/25 p-5 text-lg children:p-3">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">IQ.Wiki</a>
            </li>
            <li>
              <a href="#">Brainies</a>
            </li>
            <li>
              <a href="#">IQ Dashboard</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
});
