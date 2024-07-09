const mongoose = require("mongoose");

//schema for all the admins(main admin, mall admin, restaurant admin) =>   ALSO MAKE SURE KI .models and .controllers are to be used

export const adminSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    admin: {
      malls: {
        type: [
            {
                type: String,
                ref: referanceOfMallsSchema
            } 
        ]
      },
      permissions: {
        type: [String],
        enum: ["manage_users", "view_reports", "edit_settings"],
        default: [],
      },
    },
    mallAdmin: {
      mallId: {
        type: String,
        required: false,
      },
      restaurants: {
        type: [
            {
                type: String,
                ref: referanceOfRestaurantsSchema
            } 
        ]
      },
      permissions: {
        type: [String],
        enum: ["manage_malls", "view_mall_reports", "edit_mall_settings"],
        default: [],
      },
    },
    restaurantAdmin: {
      restaurantId: {
        type: String,
        required: false,
      },
      dishes: {
        type: [
            {
                type: String,
                ref: referanceOfDishesSchema
            } 
        ]
      },
      permissions: {
        type: [String],
        enum: [
          "manage_restaurants",
          "view_restaurant_reports",
          "edit_restaurant_settings",
        ],
        default: [],
      },
    },
  },
});
