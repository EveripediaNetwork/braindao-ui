import { component$ } from "@builder.io/qwik";
import { CoreTeamData, FoundersData } from "~/data/the-team";
import { TeamMemberCard } from "./TeamMemberCard";

export const TheTeam = component$(() => (
  <div class="p-5 max-w-6xl mx-auto">
    <h2 class="text-4xl xl:text-6xl font-bold text-center mb-16">The Team</h2>
    {/* FOUNDERS - visible from lg */}
    <div class="hidden lg:flex gap-8 justify-center items-center mb-8">
      {FoundersData.map((member) => (
        <TeamMemberCard member={member} />
      ))}
    </div>

    {/* CORE TEAM */}
    <div class="flex justify-center">
      {/* CORE TEAM - visible from lg */}
      <div class="hidden xl:inline-grid xl:grid-cols-4 gap-8">
        {CoreTeamData.slice(
          0,
          CoreTeamData.length - (CoreTeamData.length % 4)
        ).map((member) => (
          <TeamMemberCard member={member} />
        ))}
      </div>

      {/* FOUNDERS + CORE TEAM - visible under lg */}
      <div class="inline-grid xl:hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...FoundersData, ...CoreTeamData].map((member) => (
          <TeamMemberCard member={member} />
        ))}
      </div>
    </div>

    {/* CORE TEAM TRAIL - visible from xl */}
    <div class="hidden xl:flex gap-8 justify-center items-center mt-8">
      {CoreTeamData.slice(
        CoreTeamData.length - (CoreTeamData.length % 4),
        CoreTeamData.length
      ).map((member) => (
        <TeamMemberCard member={member} />
      ))}
    </div>
  </div>
));
