"use client";

import { AppShell } from "@astryxdesign/core/AppShell";
import { NavIcon } from "@astryxdesign/core/NavIcon";
import {
  SideNav,
  SideNavHeading,
  SideNavItem,
  SideNavSection,
} from "@astryxdesign/core/SideNav";
import {
  ChartBarIcon,
  UsersIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import { CubeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Chat from "../Chat";

export default function AppShellSideBar() {
  const [selectedTab, setSelectedTab] = useState("people");

  return (
    <AppShell
      contentPadding={6}
      style={{ height: "100%" }}
      sideNav={
        <SideNav
          header={
            <SideNavHeading
              icon={
                <NavIcon
                  icon={<CubeIcon style={{ width: 16, height: 16 }} />}
                />
              }
              heading="Welcome user"
              headingHref="#"
            />
          }
        >
          <SideNavSection title="Main" isHeaderHidden>
            <SideNavItem
              label="People"
              icon={HomeIcon}
              isSelected={selectedTab === "people"}
              onClick={() => {
                setSelectedTab("people");
              }}
            />
            <SideNavItem
              label="Settings "
              icon={ChartBarIcon}
              isSelected={selectedTab === "settings"}
              onClick={() => {
                setSelectedTab("settings");
              }}
            />
          </SideNavSection>
          <SideNavSection title="Organization">
            <SideNavItem label="Team" icon={UsersIcon} href="#" />
            <SideNavItem label="Settings" icon={Cog6ToothIcon} href="#" />
          </SideNavSection>
        </SideNav>
      }
    >
      {selectedTab === "people" && <Chat />}
      {selectedTab === "settings" && <div>Settings</div>}
    </AppShell>
  );
}
