import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'
import type { NavigationMenuItem as NuxtUINavigationMenuItem } from '@nuxt/ui'
import type { NavigationMenuItem } from '@/types'

export function useDashboard() {
  const page = usePage()

  // Navigation links loaded from Rails via Inertia share
  // Falls back to default links if not provided from server
  // TODO: Will be populated from Rails based on user context and permissions
  const defaultNavigationLinks: NavigationMenuItem[][] = [[{
    label: 'Home',
    icon: 'i-lucide-house',
    to: '/',
    onSelect: () => {
      // Navigation handled by Inertia.js
    }
  }, {
    label: 'Inbox',
    icon: 'i-lucide-inbox',
    to: '/inbox',
    badge: '4',
    onSelect: () => {
      // Navigation handled by Inertia.js
    }
  }, {
    label: 'Customers',
    icon: 'i-lucide-users',
    to: '/customers',
    onSelect: () => {
      // Navigation handled by Inertia.js
    }
  }, {
    label: 'Settings',
    to: '/settings',
    icon: 'i-lucide-settings',
    defaultOpen: true,
    type: 'trigger',
    children: [{
      label: 'General',
      to: '/settings',
      exact: true,
      onSelect: () => {
        // Navigation handled by Inertia.js
      }
    }, {
      label: 'Members',
      to: '/settings/members',
      onSelect: () => {
        // Navigation handled by Inertia.js
      }
    }, {
      label: 'Notifications',
      to: '/settings/notifications',
      onSelect: () => {
        // Navigation handled by Inertia.js
      }
    }, {
      label: 'Security',
      to: '/settings/security',
      onSelect: () => {
        // Navigation handled by Inertia.js
      }
    }]
  }], [{
    label: 'Feedback',
    icon: 'i-lucide-message-circle',
    to: 'https://github.com/nuxt-ui-templates/dashboard-vue',
    target: '_blank'
  }, {
    label: 'Help & Support',
    icon: 'i-lucide-info',
    to: 'https://github.com/nuxt/ui',
    target: '_blank'
  }]]

  // Get navigationLinks from Inertia shared props, fallback to defaults
  const navigationLinks = computed<NavigationMenuItem[][]>(() => {
    const sharedLinks = page.props.navigationLinks
    return sharedLinks || defaultNavigationLinks
  })

  const searchGroups = computed(() => [{
    id: 'links',
    label: 'Go to',
    items: navigationLinks.value.flat() as NuxtUINavigationMenuItem[]
  }])

  return {
    navigationLinks,
    searchGroups
  }
}

