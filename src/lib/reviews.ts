import { getMapSearchUrl } from "@/lib/site";

export type ClientReview = {
  id: string;
  name: string;
  event: string;
  text: string;
  featuredText?: string;
  source: "Google review";
  rating: 1 | 2 | 3 | 4 | 5;
  sourceUrl: string;
};

export const googleReviewsUrl = getMapSearchUrl();

export const clientReviews: ClientReview[] = [
  {
    id: "alexandra-barry",
    name: "Alexandra Barry",
    event: "Private chef and bartending",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
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
    rating: 5,
    sourceUrl: googleReviewsUrl,
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
    rating: 5,
    sourceUrl: googleReviewsUrl,
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
    rating: 5,
    sourceUrl: googleReviewsUrl,
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
    rating: 5,
    sourceUrl: googleReviewsUrl,
    text:
      "My family had the opportunity to work with Matt from dragonfly catering for a recent private chef birthday celebration dinner we had at our house. Matt was so responsive and thorough in the process of booking. On the day of the event he arrived early and was so prepared and professional. He printed menus and prepared a multi course dinner in our home. His food was absolutely amazing and our family loved having options as we all do not usually agree on the same thing! He was amazing and we would be so happy to recommend him to anyone!",
  },
  {
    id: "lisa-matecki",
    name: "Lisa Matecki",
    event: "After-wedding brunch",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    text:
      "We had a wonderful after wedding Sunday brunch for family and friends prepared by Dragonfly Catering. Buttermilk Chicken and waffles with sausage gravy, triple cheese laced cavatapi, and refreshing watermelon feta salad, Absolutely delicious and enjoyed by all. The scratch made cookie assortment included a marshmallow cornflake crunch cookie that was a crowd favorite. Thank you Matt and Rhiannon for a great meal and courteous service.",
  },
  {
    id: "r-hall",
    name: "R. Hall",
    event: "Jamaican-themed dinner",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    text:
      "I recently hired Dragonfly Catering for a Jamaican-themed night, and I couldn’t be more impressed! The Caribbean-inspired dishes were absolutely delicious, and everyone at the event raved about the food. The flavors were authentic and perfectly executed. I will definitely be using DC again in the future and highly recommend them to anyone looking for amazing food.",
  },
  {
    id: "lauren-hartman",
    name: "Lauren Hartman",
    event: "Dragonfly gift card",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    text:
      "My friend got me a gift card for Dragonfly Catering when my second baby arrived! It was the perfect gift. The food was so delicious, well-packaged, easy to heat and easy to clean. It was a great alternative to “take-out” and seemed much healthier. I will definitely order from them again for family meals and when we are entering. It was definitely worth the price and a great treat!",
  },
  {
    id: "elizabeth-carney",
    name: "Elizabeth Carney",
    event: "Couples shower",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    text:
      "Matt catered our couples shower and the food was amazing! Everyone raved about the delicious food and it was all beautifully displayed as well. We also got to top it all off with the scrumptious cupcakes by his wife. Highly recommend!",
  },
  {
    id: "christine-soriano",
    name: "Christine Soriano",
    event: "Celebration of life dinner",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    text:
      "I worked with Matt who created a private chef dinner for a Celebration of Life dinner I arranged. The food was delicious and Matt was a true pleasure to work with!",
  },
  {
    id: "filipp-petrov",
    name: "Filipp Petrov",
    event: "Private event",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    text:
      "Had such an amazing time! The food was absolutely delicious, drinks were on point, and the whole team was super friendly. Everything was just perfect!",
  },
  {
    id: "peter-fridirici",
    name: "Peter Fridirici",
    event: "Delivered family dinner",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    text:
      "We decided to treat ourselves last night and have Dragonfly Catering make our dinner. Dinner consisted of black angus meatloaf, garlic mashed potatoes, and edamame succotash. It was delivered by a friendly person, with simple re-heating instructions. Simply put, they nailed it. Absolutely delicious. We will definitely be doing this again.",
  },
  {
    id: "patricia-winstead",
    name: "Patricia Winstead",
    event: "Allergy-aware event catering",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    text:
      "We have 2 in our family with very severe food allergies. Eating out can be challenging. People with food allergies cant simply enjoy a good meal without diligence and sometimes anxiety. I spoke with several local caterers and was not getting the assurance that they felt confident taking this event. Chef Matt at Dragonfly assured me that known allergens would not be near food prep area to avoid cross contamination and items would be prepared separately too. His bio mentions his experience in allergen food safety and he answered all my questions professionally and compassionately.\n\nOur event was for about 45 people: chicken n waffles and veggie egg soufflés arrived HOT. He even kindly lent us insulating bags for the extra items.\n\nOne of the individuals with allergies exclaimed, “ I can eat all of this?!!” (Meaning here: people with allergies often only eat one safe item or bring their own food to parties).\n\nJOY - Thank you Chef Matt",
  },
  {
    id: "nancy-ellis",
    name: "Nancy Ellis",
    event: "Dinner delivery",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    text:
      "Can’t say enough great things about their catering business! We love having dinner delivered to our door on Thursday evenings! The quality of the food is amazing! To have a 2 top notch chefs create a specialty dinner accompanied by scrumptious cupcakes or homemade cookies is truly a delight! We have also ordered some of the frozen meals to take to our parents as well. 😀",
  },
  {
    id: "frank-englund",
    name: "Frank Englund",
    event: "Catered event",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    text:
      "Matt and his team did a fantastic job! Everyone was raving about the food. Highly recommend Dragonfly Catering!",
  },
  {
    id: "valerie-dixon",
    name: "Valerie Dixon",
    event: "Family meals and events",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    text:
      "Cheff Matt and Rhiannon are amazing people. AND they make amazing food. For your family meal … or for a larger dinner crowd or special event … look no where else. ⭐️⭐️⭐️⭐️⭐️ stars and then some!",
  },
  {
    id: "vicki-stone",
    name: "Vicki Stone",
    event: "Prepared meals",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    text:
      "Delicious variety of homestyle dishes prepared with local ingredients and with a gourmet flair.",
  },
  {
    id: "erin-uhler",
    name: "Erin Uhler",
    event: "Thanksgiving meal",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    text: "Saved me last minute on Thanksgiving!!! Food was amazing! Thanks so much!",
  },
  {
    id: "amanda-jordan",
    name: "Amanda Jordan",
    event: "Desserts",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    text: "Delicious desserts and amazing service!!!",
  },
  {
    id: "lisa-sinkiewicz",
    name: "Lisa Sinkiewicz",
    event: "Catered event",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    text:
      "From start to finish we had a great experience. The menu selection was fantastic and the presentation/taste of the food was a hit. Highly recommend Chef Matt!",
  },
];

export function getClientReview(id: string): ClientReview {
  const review = clientReviews.find((candidate) => candidate.id === id);

  if (!review) {
    throw new Error(`Unknown client review: ${id}`);
  }

  return review;
}

export const featuredReviews = clientReviews.filter((review) => review.featuredText);
