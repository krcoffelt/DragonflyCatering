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
    id: "sam-slater",
    name: "Sam Slater",
    event: "Wedding catering for 170 guests",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    featuredText:
      "From the start of the process to the day of our event, Chef Matt and Dragonfly Catering were amazing. Everything Matt and his team executed was perfect.",
    text:
      "We used Dragonfly Catering for our wedding of roughly 170 people. From the start of the process, to the day of our event, Chef Matt/Dragonfly Catering was amazing! Matt hosted us for a tasting months in advance to determine what we wanted to serve on our wedding day. The food that was served then and what was served on the actual day did not miss! Everything was prepared to perfection, tasted so good, and was exactly what we were looking for. We loved the flexibility we had with Matt and truly making the menu everything we wanted! On the day of the wedding, everything that Matt and his team executed was perfect, and there were no issues. We received tons of feedback from our guests after saying the exact same thing. We highly recommend Chef Matt/Dragonfly for any of your catering needs (weddings, events, birthday parties, etc.), you will not be disappointed!",
  },
  {
    id: "robbe-healey",
    name: "Robbe Healey",
    event: "Professional and private events",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    featuredText:
      "Excellent food, beautifully presented, and never ‘plug and play.’ They are simply outstanding!",
    text:
      "Chef Matt Stone and the Dragonfly Catering team are a creative, responsive, and extraordinarily customer focused catering company. Each time I have worked directly with Chef Matt, or attended an event where Dragonfly Catering was serving lunch, dinner, or a reception, it was excellent food beautifully presented and never “plug and play.” They are simply outstanding!",
  },
  {
    id: "pam-panarese",
    name: "Pam Panarese",
    event: "Engagement party and wedding events",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    text:
      "We had a great experience with Chef Matt and his team for our son’s recent engagement party. Matt was incredibly responsive to all my questions, start to finish, and instrumental in helping us host a party that exactly matched our vision. The food and presentation were both excellent and his servers very professional and warm. We’ve used Dragonfly Catering now for two wedding-related events, both very different in feel and size, and couldn’t be happier.",
  },
  {
    id: "jangonett1",
    name: "jangonett1",
    event: "Wedding catering and bartending for 120 guests",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    text:
      "My wife and I had a wedding at Lauxmont Weddings. Matt handled both our catering and bartending services. Everything was provided that we asked for. The food was amazing and exactly the same as what we tasted in our sample run, from the short rib, chicken, and salad to a squash alternative. Matt communicated with us the entire way and was transparent with all agreements. The bartending service was professional and able to accommodate requests from our guests. Our wedding was 120 people and everyone was well fed and satisfied. I recommend anyone looking for top-quality service and food to give Matt a call.",
  },
  {
    id: "czarlenne-benner",
    name: "Czarlenne Benner",
    event: "Teacher luncheons",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    text:
      "Matt at DFC is great to work with! We’ve used him to cater our teacher luncheons and he always takes into account our ideas and makes great recommendations at affordable prices! He’s done a Mexican taco theme menu, Italian themed and a Mediterranean themed. Our teachers at school rave about his amazingly delicious food. I’ve also had some of the leftovers and highly recommend! Thank you Matt!!!",
  },
  {
    id: "donna-hoster",
    name: "Donna Hoster",
    event: "School celebration for 100+ guests",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    featuredText:
      "There were over 100 attendees and everyone loved the food. It was absolutely delicious, and I’ve never had a better salad!",
    text:
      "We used Dragonfly for a large party celebrating our high school musical. There were over 100 attendees and everyone loved the food! It was absolutely delicious! And no kidding, I’ve never had a better salad! It was full of vegetables and so colorful! Matt didn’t skimp on ingredients! I would use Dragonfly again and again.",
  },
  {
    id: "sue-long",
    name: "Sue Long",
    event: "Food and community service",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    featuredText:
      "Matt is an excellent chef and remarkable human being. I’m very impressed with his cooking and how he gives his time and talent to serve those with food insecurity.",
    text:
      "Matt is an excellent chef and remarkable human being. I’m very impressed with his cooking and how he gives his time and talent to serve those with food insecurity.",
  },
  {
    id: "rikki-myer",
    name: "Rikki Myer",
    event: "Surprise anniversary party",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    text:
      "Matt helped us build the perfect menu for our parents’ surprise anniversary party! The food was delicious and working with him was great! We look forward to using him again in the future! He gave us different options and really listened to what was important to us!",
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
    event: "Personal and work events",
    source: "Google review",
    rating: 5,
    sourceUrl: googleReviewsUrl,
    featuredText:
      "Every time they NAIL IT with service, kindness, and exceptional customer service. And what exceeds all of that? THE FOOD!",
    text:
      "I have used Dragonfly Catering for personal and work events, and every time they NAIL IT with service, kindness, and exceptional customer service. And what exceeds all of that? THE FOOD! Always delicious! Always meticulously displayed and then some. I wish I could give 1,000 stars ... and even then it's not enough!",
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
    featuredText:
      "From start to finish we had a great experience. The menu selection was fantastic and the presentation/taste of the food was a hit. Highly recommend Chef Matt!",
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

export const homepageReviews = [
  getClientReview("valerie-dixon"),
  getClientReview("sam-slater"),
  getClientReview("robbe-healey"),
  getClientReview("donna-hoster"),
  getClientReview("sue-long"),
];
