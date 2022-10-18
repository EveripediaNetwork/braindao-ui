import { component$ } from "@builder.io/qwik";
import { TeamMember } from "~/data/the-team";

export const TeamMemberCard = component$(
  ({ member }: { member: TeamMember }) => (
    <div class="flex flex-col items-center text-center">
      <img class="object-cover -z-10 w-[250px] h-[300px]" src={member.image} />
      <h3 class="uppercase z-20 font-bebas_neue -mt-4 text-4xl">
        {member.name}
      </h3>
      <p class="mt-2 text-pink-500 text-sm">{member.title}</p>
    </div>
  )
);
