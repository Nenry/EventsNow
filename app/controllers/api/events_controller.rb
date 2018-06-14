class Api::EventsController < ApplicationController

  def convert_time(time)
    new_time = time.to_time
    new_time = new_time.strftime("%I:%M %p")
  end 

  def convert_date(date)
    date.to_date.strftime("%m%d%Y")
  end 

  def valid_date?(date)
    Date.parse(date) >= Date.today
  end 

  def create
    @event = Event.new(event_params)
    @event.host_id = current_user.id
    @event.time_start = convert_time(@event.time_start)
    @event.time_end = convert_time(@event.time_start)


    if @event.category_id == 0 
      @event.category_id = 1
    end 
    if  @event.save
      render :show
    else 
      render json: @event.errors.full_messages, status: 422
    end

  end

  def destroy
    @event = Event.find_by(id:params[:id])
    
    if @event.destroy
      render :show
    else
      render json: ["Can't delete an event that does not exist"], status: 422
    end 

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
    
    if current_user.id == @event.host_id && @event.update(event_params) 
      render :show
    else 
      render json: @event.errors.full_messages, status: 422
    end 

  end 

  def event_params
    params.require(:event).permit(:title, :body, :date, :time_start, :time_end, :address, 
    :city, :state, :host_id, :category_id, :total_tickets, :img_url, :price )    
  end 

  
end
