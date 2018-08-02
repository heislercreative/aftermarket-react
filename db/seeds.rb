# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.new_with_cart(email: 'test@aftermarket.test', password: 'testpw', first_name: 'Brennan', last_name: 'Heisler', address: '1234 Main St', city: 'Durnsville', state: 'IN', zip: 12345)
user.save

Product.create([
  {
    name: 'Crossbody Dark Green Leather Purse / G.H. Bass',
    img_full: 'http://heislercreative.com/demos/aftermarket/crossbody.jpg',
    img_thumbnail: 'http://heislercreative.com/demos/aftermarket/crossbody_thumb.jpg',
    description: "This G.H. Bass purse is made of genuine leather.\r\n\r\nIt is spacious in the main compartment, where you'll find a small compartment with a zipper and another pouch on the outside.\r\n\r\nCondition: Great, like new. Very clean inside and out. Some very minor scratches or normal sings of wear for leather here and there but nothing too noticeable, you would really need to look closely to find those \"defects\" (see photos)\r\nThe hardware is in good condition, and the color is still vibrant.\r\n\r\nMeasurements\r\n\r\nLength: 10.5in at the top (longest point) & 8in at the bottom\r\nHeight: 9.5in\r\nWidth: 4in\r\nStrap: 44in",
    price: 70
  },

  {
    name: 'Black Suede Leather Belt by Milor',
    img_full: 'http://heislercreative.com/demos/aftermarket/milor_belt.jpg',
    img_thumbnail: 'http://heislercreative.com/demos/aftermarket/milor_belt_thumb.jpg',
    description: "Vintage 1980's Milor Black Suede Belt\r\n\r\nThe outside is lined with suede with a gold front buckle, while the inside is made of black leather\r\n\r\nCondition: used, as with any vintage item there's some minor wear on the overall belt, as well as a few scratches on the buckle (see photos).\r\n\r\nColor: Black & Gold\r\n\r\nSize: Medium-Large\r\n\r\nAdjustable from 28in to 32in from tip of buckle to end",
    price: 20
  },

  {
    name: 'Coach Casino Vintage Purse',
    img_full: 'http://heislercreative.com/demos/aftermarket/coach_casino.jpg',
    img_thumbnail: 'http://heislercreative.com/demos/aftermarket/coach_casino_thumb.jpg',
    description: "Vintage Coach Bag - Casino style\r\n\r\nMade in the 90's in the USA\r\n\r\nThis is a RESTORED leather bag \r\n\r\nColor: Mink / dark brown\r\n\r\nIt comes with its original Coach hang tag.\r\nClean solid brass with some scratches as it is a vintage item, previously owned.\r\n\r\nThe strap is detachable.\r\n\r\nSerial number: F6D-9924\r\n\r\nCondition: great shape. No tears or scratches in the leather. \r\nPlease see last photo as there's a small crack on the strap. \r\nOverall, some slight scratches throughout the bag, which is normal for natural cowhide leather.\r\n\r\nMeasurements\r\nWidth: 8in\r\nDepth: 2.5in\r\nHeight: 5in\r\nStrap length: 50in",
    price: 100
  },

  {
    name: "Brown Heels with Bow / Size 8.5 US Women's / NEW never worn",
    img_full: 'http://heislercreative.com/demos/aftermarket/brown_shoes.jpg',
    img_thumbnail: 'http://heislercreative.com/demos/aftermarket/brown_shoes_thumb.jpg',
    description: "- Brand: Chic Wide Shoes\r\n- Era: 1980s\r\n- Color: Brown\r\n- Size: 8.5 US.\r\nHeel: 1.5in (4cm)\r\n\r\n- Condition: semi-new, slightly worn, with a few has scratches on the sole as well as some numbers written.\r\nOn the right shoe, (only if you look carefully) you can see some traces of the glue they used to put it together.\r\nAlso, there are two tiny scratches on the back of the left shoe but you only see them if you are really close (please see last photo).\r\nOther than that they look like new and are completely clean on the inside and outside.",
    price: 25
  },

  {
    name: 'Authentic Pearls Set Vintage / Sterling Silver / Free Shipping',
    img_full: 'http://heislercreative.com/demos/aftermarket/pearls.jpg',
    img_thumbnail: 'http://heislercreative.com/demos/aftermarket/pearls_thumb.jpg',
    description: "FREE SHIPPING on this beautiful set of pearls.\r\n\r\nThis set was made in India with authentic pearls grown in that country, the chain is sterling silver.\r\nMade in the 1990's \r\n\r\nMeasurements\r\nNecklace: 7.5in closed - 15in open (extended)\r\nBracelet: 3.5in closed - 7in open\r\nEarrings: 3/4in\r\n\r\nCondition: good-used, as with any vintage item it may show some wear but no scratches or stains (see photos)",
    price: 70
  },

  {
    name: 'Coach Abbie Vintage / Small Crossbody Purse',
    img_full: 'http://heislercreative.com/demos/aftermarket/coach_abbie.jpg',
    img_thumbnail: 'http://heislercreative.com/demos/aftermarket/coach_abbie_thumb.jpg',
    description: "Coach crossbody purse from the 90's \r\n\r\n-Brown soft genuine leather \r\n-Gold color hardware\r\n-Top zipper closure\r\n-Doesn't come with Coach's hanging tag \r\n\r\nSerial COACH No:L7C-9017 \r\n\r\nCondition: Great, barely used! As with any vintage item there are some minor marks, normal wear for vintage leather (see the photos.)\r\nThe hardware and zipper are in great shape, no scratches or discolouration.\r\n\r\nMeasurements\r\nLength: 6.75in\r\nHeight 6in\r\nWidth: 2in\r\nStrap: 49in",
    price: 85
  },

  {
    name: 'Calvin Klein Black Suede Belt',
    img_full: 'http://heislercreative.com/demos/aftermarket/ck_belt.jpg',
    img_thumbnail: 'http://heislercreative.com/demos/aftermarket/ck_belt_thumb.jpg',
    description: "Vintage Calvin Klein Belt.\r\n\r\nMaterial: Black Suede Leather. It features a black metal buckle with no scratches.\r\n\r\nCondition: good, with some light wear as any vintage item and slightly color fading (see photos).\r\n\r\nSize: Large\r\n\r\nDimensions\r\nLength: 39in\r\nWidth: 7/8in",
    price: 20
  },

  {
    name: 'Off-White Leather Purse/Clutch - Ann Klein by Calderon Edition',
    img_full: 'http://heislercreative.com/demos/aftermarket/off_white_clutch.jpg',
    img_thumbnail: 'http://heislercreative.com/demos/aftermarket/off_white_clutch_thumb.jpg',
    description: "Leather Handbag by Anne Klein for Calderon. Made in the 80’s.\r\n\r\nColor: off-white. Beige Interior with vinyl lining\r\n\r\nCould be used as a clutch when you tuck the straps inside.\r\n\r\nIt has one interior zip pocket with the lion logo in gold, as well as a plate inside with Anne Klein for Calderon.\r\nThe front has a patch with the Anne Klein logo.\r\n\r\nHinged closure, it opens wide and stays open without having to hold it.\r\n\r\nCondition: slightly used with minor visible wear. The inside has two tiny blue spots, and one little scratch in the front (you really have to look closely to see these defects) \r\n\r\nMeasurements\r\nHeight: 6.6in\r\nLength: 12in\r\nStrap length: 3in",
    price: 80
  },

])

user.cart.products << [Product.find(1), Product.find(4)]
