class Api::BookmarksController < ApplicationController

  def create
    @bookmark = Bookmark.new(bookmark_params)
    @bookmark.user_id = current_user.id

    if @bookmark.save
      render :show
    else
      render json: @bookmark.errors.full_messages, status: 422
    end

  end 

  def index 
    @bookmarks = current_user.bookmarks
    render :index
  end 

  def destroy 
    @bookmark = Bookmark.find_by(id: params[:id])

    if current_user.id == @bookmark.user_id && @bookmark.destroy
      render :show
    else
      render json: ["Can't delete a bookmark that does not exist!"], status: 422
    end 

  end 

  def bookmark_params
    params.require(:bookmark).permit(:event_id, :user_id)
  end 

end
