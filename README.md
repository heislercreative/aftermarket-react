# Aftermarket Vintage Store

Etsy-style clone built with React/Redux and an internal Rails API, for the sale of unique vintage items.

## Installation & Usage

1) To start using the app, clone the repository and `cd client` to navigate into the React client-side.
2) Run `npm install` to install Node dependencies necessary gems.
3) `cd ..` to return to the Rails app and run `rake db:migrate` and `rake db:seed` to create/populate the API database.
4) Run `rake start` to launch the client and API servers. Navigate to http://localhost:3000 to view the React app.

### Signup/Login
- Select 'Login' from the menu and use the Sign Up option to create a new account (all fields required).
- If account already exists, use the Log In form.

### Products
- View products from the main index. Select an item to see more information and add to cart.

### Account Details
- View and update account credentials and address.

### Cart
- View cart items and total cost.
- Remove items from cart if desired.
- Confirm order to see order confirmation and remove products from purchase by other buyers.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/heislercreative/aftermarket-react. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Aftermarket Vintage Store project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/heislercreative/aftermarket-react/blob/master/CODE_OF_CONDUCT.md).
