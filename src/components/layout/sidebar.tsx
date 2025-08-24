'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar';
import {
  Home,
  BarChart3,
  ListMusic,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function AppSidebar() {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [playlistOpen, setPlaylistOpen] = useState(false);

  const dashboardItems = [
    { title: 'Overview', url: '/dashboard/overview' },
    { title: 'Statistics', url: '/dashboard/statistics' },
    { title: 'Activity', url: '/dashboard/activity' },
  ];

  const playlistItems = [
    { title: 'My Playlists', url: '/playlist/my-playlists' },
    { title: 'Create New', url: '/playlist/create' },
    { title: 'Favorites', url: '/playlist/favorites' },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Home */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/" className="flex items-center gap-3">
                    <Home size={20} className="text-gray-600" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Dashboard Accordion */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setDashboardOpen(!dashboardOpen)}
                  className="w-full justify-between"
                >
                  <div className="flex items-center gap-3">
                    <BarChart3 size={20} className="text-gray-600" />
                    <span>Dashboard</span>
                  </div>
                  {dashboardOpen ? (
                    <ChevronDown size={16} className="text-gray-500" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-500" />
                  )}
                </SidebarMenuButton>
                {dashboardOpen && (
                  <SidebarMenuSub>
                    {dashboardItems.map((item) => (
                      <SidebarMenuSubButton key={item.title} asChild>
                        <Link href={item.url}>
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    ))}
                  </SidebarMenuSub>
                )}
              </SidebarMenuItem>

              {/* Playlist Accordion */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setPlaylistOpen(!playlistOpen)}
                  className="w-full justify-between"
                >
                  <div className="flex items-center gap-3">
                    <ListMusic size={20} className="text-gray-600" />
                    <span>Playlist</span>
                  </div>
                  {playlistOpen ? (
                    <ChevronDown size={16} className="text-gray-500" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-500" />
                  )}
                </SidebarMenuButton>
                {playlistOpen && (
                  <SidebarMenuSub>
                    {playlistItems.map((item) => (
                      <SidebarMenuSubButton key={item.title} asChild>
                        <Link href={item.url}>
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    ))}
                  </SidebarMenuSub>
                )}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
