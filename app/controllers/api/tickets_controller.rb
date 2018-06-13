class Api::TicketsController < ApplicationController

  def create
    @ticket = Ticket.new(ticket_params)
    @ticket.buyer_id = current_user.id
    
    if @ticket.save 
      render :show
    else 
      render json: @ticket.errors.full_messages, status: 422
    end 
  end 

  def destroy
    @ticket = Ticket.find_by(id: params[:id])
    @ticket.buyer_id = current_user.id

    if @ticket.buyer_id  == current_user.id && @ticket.destroy
      render :show
    else 
      render json: ['Ticket does not exist for you'], status: 422
    end 

  end 

  def index
    @tickets = current_user.tickets
    render :index

  end
  
  def ticket_params 
    params.require(:ticket).permit(:event_id, :buyer_id, :tickets_count)
  end 
end
