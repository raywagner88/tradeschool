# frozen_string_literal: true

class InertiaController < ApplicationController
  inertia_share flash: -> { flash.to_hash }

  # Navigation links shared across all Inertia pages
  # TODO: Will be populated based on user context and permissions
  inertia_share navigationLinks: -> { navigation_links }

  private

  def navigation_links
    # Placeholder: Will be replaced with actual user-based navigation logic
    # For now, returns nil to use default links from frontend
    nil
  end
end
