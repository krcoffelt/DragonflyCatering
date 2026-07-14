export type ClientReview = {
  id: string;
  name: string;
  event: string;
  text: string;
  featuredText?: string;
  source: "Google review";
};

export const clientReviews: ClientReview[] = [
  {
    id: "jennifer-asare",
    name: "Jennifer Asare",
    event: "Wedding reception",
    source: "Google review",
    featuredText:
      "We hosted our wedding reception (52 people) at the Buchanan Mansion with Chef Matt/Dragonfly Catering and I am honestly blown away by the level of care, attention, and effort put into making our day so beautiful and memorable.",
    text:
      "We hosted our wedding reception (52 people) at the Buchanan Mansion with Chef Matt/Dragonfly Catering and I am honestly blown away by the level of care, attention, and effort put into making our day so beautiful and memorable. Matt was so responsive and helpful from the onset. He curated the most vibrant and delicious menu that was such a hit, orchestrated bar service with a fantastic drinks selection, set up the event space and dining experience so creatively and beautifully to accommodate our vision (including connecting us with Lindona who did such an outstanding job on the decor), and even provided us a day-of coordinator! Everything came together beautifully to achieve the intimate and polished feel we wanted while still allowing for more laid back fun - music, dancing and lots of mingling. I can’t recommend the space, catering services and specifically Matt and his service partners enough. We easily would’ve had to pay double the cost anywhere else. If you’re looking for a place that will handle the details immaculately so you can enjoy your big day, this is it!",
  },
  {
    id: "alexandra-barry",
    name: "Alexandra Barry",
    event: "Private chef and bartending",
    source: "Google review",
    featuredText:
      "The food was absolutely delicious and beautifully presented — every dish was a work of art. The cocktails were equally impressive, crafted with care and creativity.",
    text:
      "We had an amazing experience with the private chef and his wife, who was also the bartender. The food was absolutely delicious and beautifully presented — every dish was a work of art. The cocktails were equally impressive, crafted with care and creativity. Highly recommend them to anyone looking for a unique and unforgettable culinary experience!",
  },
  {
    id: "deb-a",
    name: "Deb A.",
    event: "Anniversary dinner",
    source: "Google review",
    featuredText:
      "Matt came to the house and took over the kitchen and made amazing appetizers, dinner and desserts. Matt worked in the background and was so friendly and considerate of everyone.",
    text:
      "We had Dragonfly Catering for an intimate anniversary dinner for 8 people. Matt came to the house and took over the kitchen and made amazing appetizers, dinner and desserts. Matt worked in the background and was so friendly and considerate of everyone. It was a very special evening. Highly recommend!",
  },
  {
    id: "katherine-boas",
    name: "Katherine Boas",
    event: "Backyard wedding",
    source: "Google review",
    featuredText:
      "Chef Matt was an absolute pleasure to work with from the very start. He’s extremely easy to talk to, is so helpful with recommendations and advice, and went above and beyond to make our wedding the most perfect day.",
    text:
      "I cannot say enough good things about Dragonfly Catering! I used their services for my backyard wedding on my parents' property with 150 guests. Chef Matt was an absolute pleasure to work with from the very start. He’s extremely easy to talk to, is so helpful with recommendations and advice, and went above and beyond to make our wedding the most perfect day. The food was so delicious and special! Then to make it even more special, Chef Matt’s wife, Rhiannon, runs Dragonfly Libations, which we used for their bartending services. Our specialty cocktails were so yummy and the staff were cross-trained to help out anywhere there was a need. I couldn’t have asked for a better catering/bartending team - so very thankful!",
  },
  {
    id: "linda-barsamian",
    name: "Linda Barsamian",
    event: "Easter brunch",
    source: "Google review",
    featuredText:
      "Chef Matt is the real deal...the care he takes preparing and setting up as well as his presentation is top notch professional and can't be beat!",
    text:
      "We hired Chef Matt for an Easter Brunch and it was beyond amazing!! Everyone loved the food and couldn't stop talking about the French toast, lobster sliders, potatoes, salad etc. Everything on the menu went so well together!! Chef Matt is the real deal...the care he takes preparing and setting up as well as his presentation is top notch professional and can't be beat! We are excited to use Dragonfly catering for our next event!!",
  },
  {
    id: "sydney-drumheller",
    name: "Sydney Drumheller",
    event: "Private birthday dinner",
    source: "Google review",
    text:
      "My family had the opportunity to work with Matt from dragonfly catering for a recent private chef birthday celebration dinner we had at our house. Matt was so responsive and thorough in the process of booking. On the day of the event he arrived early and was so prepared and professional. He printed menus and prepared a multi course dinner in our home. His food was absolutely amazing and our family loved having options as we all do not usually agree on the same thing! He was amazing and we would be so happy to recommend him to anyone!",
  },
  {
    id: "lisa-matecki",
    name: "Lisa Matecki",
    event: "After-wedding brunch",
    source: "Google review",
    text:
      "We had a wonderful after wedding Sunday brunch for family and friends prepared by Dragonfly Catering. Buttermilk Chicken and waffles with sausage gravy, triple cheese laced cavatapi, and refreshing watermelon feta salad, Absolutely delicious and enjoyed by all. The scratch made cookie assortment included a marshmallow cornflake crunch cookie that was a crowd favorite. Thank you Matt and Rhiannon for a great meal and courteous service.",
  },
  {
    id: "r-hall",
    name: "R. Hall",
    event: "Jamaican-themed dinner",
    source: "Google review",
    text:
      "I recently hired Dragonfly Catering for a Jamaican-themed night, and I couldn’t be more impressed! The Caribbean-inspired dishes were absolutely delicious, and everyone at the event raved about the food. The flavors were authentic and perfectly executed. I will definitely be using DC again in the future and highly recommend them to anyone looking for amazing food.",
  },
  {
    id: "lauren-hartman",
    name: "Lauren Hartman",
    event: "Dragonfly gift card",
    source: "Google review",
    text:
      "My friend got me a gift card for Dragonfly Catering when my second baby arrived! It was the perfect gift. The food was so delicious, well-packaged, easy to heat and easy to clean. It was a great alternative to “take-out” and seemed much healthier. I will definitely order from them again for family meals and when we are entering. It was definitely worth the price and a great treat!",
  },
  {
    id: "elizabeth-carney",
    name: "Elizabeth Carney",
    event: "Couples shower",
    source: "Google review",
    text:
      "Matt catered our couples shower and the food was amazing! Everyone raved about the delicious food and it was all beautifully displayed as well. We also got to top it all off with the scrumptious cupcakes by his wife. Highly recommend!",
  },
  {
    id: "christine-soriano",
    name: "Christine Soriano",
    event: "Celebration of life dinner",
    source: "Google review",
    text:
      "I worked with Matt who created a private chef dinner for a Celebration of Life dinner I arranged. The food was delicious and Matt was a true pleasure to work with!",
  },
  {
    id: "filipp-petrov",
    name: "Filipp Petrov",
    event: "Private event",
    source: "Google review",
    text:
      "Had such an amazing time! The food was absolutely delicious, drinks were on point, and the whole team was super friendly. Everything was just perfect!",
  },
];

export const featuredReviews = clientReviews.filter((review) => review.featuredText);
