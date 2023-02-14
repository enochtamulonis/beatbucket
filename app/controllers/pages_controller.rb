class PagesController < ApplicationController
  def home
    redirect_to library_path if current_user
  end
end
