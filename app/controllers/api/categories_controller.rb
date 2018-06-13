class Api::CategoriesController < ApplicationController

  def create 
    @category = Category.new(category_params)
    
    if @category.save
      render :show
    else 
      render json: @category.errors.full_messages, status: 422
    end 
  end 

  def index
    @categories = Category.all

    render :index
  end 

  def show 
    @category = Category.find_by(id: params[:id])
    render :show
  end 

  def category_params
    params.require(:category).permit(:title, :event_id)
  end 


end
