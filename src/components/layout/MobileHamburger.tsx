import { component$, useStore } from "@builder.io/qwik";
import { HamburgerIcon } from "../svgs/icons/HamburgerIcon";

export const MobileHambuger = component$(() => {
  const store = useStore({ isOpen: false });
  return (
    <>
      <button onClick$={() => (store.isOpen = !store.isOpen)}>
        <HamburgerIcon />
      </button>
      {store.isOpen && (
        <div class="absolute top-20 z-20 right-0 bg-black w-screen">
          <ul class="flex flex-col gap-2 p-5">
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
