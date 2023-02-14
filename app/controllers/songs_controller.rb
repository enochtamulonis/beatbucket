class SongsController < ApplicationController
  def new
    @song = current_user.songs.new
  end

  def create
    if @song = current_user.songs.create(song_params)
      redirect_to library_path, notice: "Song was uploaded succesfully"
    else
      render :new
    end
  end

private
  def song_params
    params.require(:song).permit(:title, :audio)
  end
end
