<script setup lang="ts">
import { ref } from 'vue'
import { Link } from '@inertiajs/vue3'
import { formatTimeAgo } from '@vueuse/core'
import { isNotificationsSlideoverOpen } from '@/composables/useNotifications'

// TODO: Replace with actual notifications from backend
interface Notification {
  id: string | number
  unread?: boolean
  sender: {
    name: string
    avatar?: Record<string, unknown>
  }
  date: string
  body: string
}

const notifications = ref<Notification[]>([])

// For now, using empty array. Will be populated when notifications are implemented
</script>

<template>
  <USlideover
    v-model:open="isNotificationsSlideoverOpen"
    title="Notifications"
  >
    <template #body>
      <Link
        v-for="notification in notifications"
        :key="notification.id"
        :href="`/inbox?id=${notification.id}`"
        class="px-3 py-2.5 rounded-md hover:bg-elevated/50 flex items-center gap-3 relative -mx-3 first:-mt-3 last:-mb-3"
      >
        <UChip
          color="error"
          :show="!!notification.unread"
          inset
        >
          <UAvatar
            v-bind="notification.sender.avatar"
            :alt="notification.sender.name"
            size="md"
          />
        </UChip>

        <div class="text-sm flex-1">
          <p class="flex items-center justify-between">
            <span class="text-highlighted font-medium">{{ notification.sender.name }}</span>

            <time
              :datetime="notification.date"
              class="text-muted text-xs"
              v-text="formatTimeAgo(new Date(notification.date))"
            />
          </p>

          <p class="text-dimmed">
            {{ notification.body }}
          </p>
        </div>
      </Link>

      <div v-if="notifications.length === 0" class="text-center text-dimmed py-8">
        No notifications
      </div>
    </template>
  </USlideover>
</template>

