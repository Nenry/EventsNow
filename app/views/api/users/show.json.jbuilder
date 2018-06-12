json.partial! "api/users/user", user: @user
json.bookmarks do 
   @user.bookmarks
end 