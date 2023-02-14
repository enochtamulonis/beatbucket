class LibraryController < ApplicationController
  def show
    @songs = Song.all.order(created_at: :asc).limit(10)
  end
end
