class Api::EventsController < ApplicationController

  def create
    @event = Event.new(event_params)

    if @event.save
      render :show
    else 
      render json: @event.errors.full_messages, status: 422
    end

  end

  def destroy
    @event = Event.find_by(id:params[:id])
  end 

  def index
    @events = Event.all
    render :index
  end

  def show
    @event = Event.find_by(id: params[:id])
    render :show
  end 

  def update
    @event = Event.find_by(id: params[:id])
    render :show
  end 

  def event_params
    params.require(:event).permit(:title, :body, :date, :time_start, :time_end, :address, 
    :city, :state, :host_id, :category_id, :tickets_left, :img_url, :price )    
  end 
end
