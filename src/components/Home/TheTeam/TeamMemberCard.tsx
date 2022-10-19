import { component$, useSignal, useStore, useWatch$ } from "@builder.io/qwik";
import { BrainIcon } from "~/components/icons/Brain";
import { CloseIcon } from "~/components/icons/Close";
import { LinkedInIcon } from "~/components/icons/LinkedIn";
import { PlusIcon } from "~/components/icons/Plus";
import { TwitterIcon } from "~/components/icons/Twitter";
import { TeamMember } from "~/data/the-team";

export const TeamMemberCard = component$(
  ({ member }: { member: TeamMember }) => {
    const isOpen = useStore({
      value: false,
    });
    const cardFront = useSignal<HTMLDivElement>();
    const cardBack = useSignal<HTMLDivElement>();

    useWatch$(({ track }) => {
      const isCardOpen = track(() => isOpen.value);

      if (isCardOpen) {
        cardBack.value?.classList.remove("hidden");
        cardBack.value?.classList.add("flex");
      } else {
        cardBack.value?.classList.remove("flex");
        cardBack.value?.classList.add("hidden");
      }
    });

    return (
      <div class="relative w-[250px] h-[360px]">
        {/* FRONT OF THE CARD */}
        <div
          ref={cardFront}
          class="flex relative flex-col items-center text-center"
        >
          <button
            onClick$={() => {
              isOpen.value = true;
            }}
            class="absolute grid place-items-center bg-black h-8 w-8 right-0"
          >
            <PlusIcon className="fill-white" />
          </button>
          <img
            class="object-cover -z-10 w-[250px] h-[300px]"
            src={member.image}
          />
          <h3 class="uppercase font-bebas_neue -mt-4 text-4xl">
            {member.name}
          </h3>
          <p class="mt-2 text-pink-500 text-sm">{member.title}</p>
        </div>

        {/* BACK OF THE CARD */}
        <div
          ref={cardBack}
          class="hidden bg-[#121212]/95 absolute top-0 left-0 w-full h-full z-3 flex-col "
        >
          <div class="relative p-4">
            <button
              onClick$={() => {
                isOpen.value = false;
              }}
              class="absolute grid place-items-center h-8 w-8 top-0 right-0"
            >
              <CloseIcon className="fill-white" />
            </button>
            <h3 class="text-xl font-bold mt-4">{member.name}</h3>
            <p class="mb-4 text-xs">{member.title}</p>
            <p class="text-sm">{member.about}</p>
            <div class="flex items-center mt-4 gap-3 fill-white children:bg-gradient-radial-at-tr children:rounded-md children:from-white/10 children:to-transparent children:p-2 children:border-white/10 children:border-[1px]">
              {Object.entries(member.socials).map((social) => (
                <TeamMemberSocialIcon social={social[0]} link={social[1]} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export const TeamMemberSocialIcon = component$(
  ({ social, link }: { social: string; link: string }) => {
    switch (social) {
      case "twitter":
        return (
          <a href={link} target="_blank">
            <TwitterIcon className="w-5 h-5" />
          </a>
        );
      case "linkedin":
        return (
          <a href={link} target="_blank">
            <LinkedInIcon className="w-5 h-5" />
          </a>
        );
      case "iqWiki":
        return (
          <a href={link} target="_blank">
            <BrainIcon className="w-5 h-5" />
          </a>
        );
      default:
        return <></>;
    }
  }
);
