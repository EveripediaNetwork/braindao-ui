import {
  $,
  component$,
  useClientEffect$,
  useSignal,
  useStore,
  useWatch$,
} from "@builder.io/qwik";
import gsap from "gsap";
import { BrainIcon } from "~/components/icons/Brain";
import { CloseIcon } from "~/components/icons/Close";
import { LinkedInIcon } from "~/components/icons/LinkedIn";
import { PlusIcon } from "~/components/icons/Plus";
import { TwitterIcon } from "~/components/icons/Twitter";
import { TeamMember } from "~/data/the-team";

export const TeamMemberCard = component$(
  ({
    member,
    store,
  }: {
    member: TeamMember;
    store: { active: boolean | string };
  }) => {
    const card = useSignal<HTMLDivElement>();
    const cardFront = useSignal<HTMLDivElement>();
    const cardBack = useSignal<HTMLDivElement>();

    const isActive = useStore({ value: false });

    useClientEffect$(() => {
      gsap.set(card.value!, {
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      });
      gsap.set(cardBack.value!, { rotationY: -180 });

      gsap.fromTo(
        card.value!,
        { opacity: 0, y: 50 },
        {
          visibility: "visible",
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card.value!,
            start: "top 80%",
          },
        }
      );
    });

    const unFlipCard = $(() => {
      gsap
        .timeline()
        .to(cardFront.value!, { rotationY: 0 })
        .to(cardBack.value!, { rotationY: -180 }, 0);
    });

    const flipCard = $(() => {
      gsap
        .timeline()
        .to(cardFront.value!, { rotationY: 180 })
        .to(cardBack.value!, { rotationY: 0 }, 0);
    });

    useWatch$(({ track }) => {
      const active = track(() => store.active);
      const isMemberActive = track(() => isActive.value);

      if (cardFront.value) {
        if (isMemberActive) {
          cardFront.value.style.pointerEvents = "none";
        } else {
          cardFront.value.style.pointerEvents = "auto";
        }
      }

      if (
        isMemberActive &&
        active != member.name &&
        cardFront.value &&
        cardBack.value
      ) {
        if (card.value && cardFront.value && cardBack.value) {
          console.log(`CAUGHT CARD ${member.name} OPEN BUT NOT ACTIVE`);
          unFlipCard();
          isActive.value = false;
        }
      }
    });

    return (
      <div
        ref={card}
        class="invisible relative w-[250px] h-[360px] children:w-[250px] children:h-[360px]"
      >
        {/* FRONT OF THE CARD */}
        <div ref={cardFront} class="absolute">
          <div class="flex relative flex-col items-center text-center">
            <button
              onClick$={() => {
                store.active = member.name;
                isActive.value = true;
                flipCard();
              }}
              class="absolute grid place-items-center bg-black h-8 w-8 right-0"
            >
              <PlusIcon className="fill-white" />
            </button>
            <img
              class="object-cover -z-10 w-[250px] h-[300px]"
              src={member.image}
              width="250"
              height="300"
            />
            <h3 class="uppercase font-bebas_neue -mt-4 text-4xl">
              {member.name}
            </h3>
            <p class="mt-2 text-pink-500 text-sm">{member.title}</p>
          </div>
        </div>

        {/* BACK OF THE CARD */}
        <div ref={cardBack} class="absolute backface-hidden bg-[#121212]/95">
          <div class="relative p-4">
            <button
              onClick$={() => {
                store.active = false;
                isActive.value = false;
                unFlipCard();
              }}
              class="absolute grid place-items-center h-8 w-8 top-0 right-0 z-20"
            >
              <CloseIcon className="fill-white" />
            </button>
            <h3 class="text-xl font-bold mt-4">{member.name}</h3>
            <p class="mb-4 text-xs">{member.title}</p>
            <p class="text-sm">{member.about}</p>
            <div class="flex items-center mt-4 gap-3 children:bg-gradient-radial-at-tr children:rounded-md children:from-white/10 children:to-transparent children:p-2 children:border-white/10 children:border-[1px]">
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
            <TwitterIcon className="w-5 h-5 fill-white" />
          </a>
        );
      case "linkedin":
        return (
          <a href={link} target="_blank">
            <LinkedInIcon className="w-5 h-5 fill-white" />
          </a>
        );
      case "iqWiki":
        return (
          <a href={link} target="_blank">
            <BrainIcon className="w-5 h-5 fill-white" />
          </a>
        );
      default:
        return <></>;
    }
  }
);
