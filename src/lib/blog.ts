export type BlogSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  quickAnswer: string;
  published: string;
  publishedLabel: string;
  readingTime: string;
  hero: { src: string; alt: string; position?: string };
  feature: { src: string; alt: string; position?: string };
  sections: BlogSection[];
  faqs: { question: string; answer: string }[];
  relatedServices: { label: string; href: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "chester-county-catering-cost-per-person",
    category: "Catering planning",
    title: "Chester County Catering Costs: A Practical Price Guide",
    shortTitle: "What shapes catering costs?",
    description:
      "Understand catering costs per person in Chester County, PA, including food, staffing, rentals, service style, venue logistics, and smart ways to set a budget.",
    intro:
      "A catering quote is more than the price of a plate. It is a plan for turning a venue, office, or private home into a place where food can be prepared, served, cleared, and enjoyed well.",
    quickAnswer:
      "Catering costs in Chester County depend most on guest count, menu, service style, staffing, rentals, bar service, and the practical needs of the venue. The most useful comparison is not the lowest per-person number; it is what each proposal includes from setup through cleanup.",
    published: "2026-08-28",
    publishedLabel: "August 28, 2026",
    readingTime: "9 minute read",
    hero: {
      src: "/assets/dragonfly/photos/july-2026/chef-matt-buffet-service.webp",
      alt: "Chef Matt serving a colorful catered buffet in Chester County",
      position: "center 45%",
    },
    feature: {
      src: "/assets/dragonfly/photos/july-2026/dragonfly-plated-seasonal-course.webp",
      alt: "A composed seasonal course prepared for a catered dinner",
    },
    sections: [
      {
        id: "what-you-are-paying-for",
        heading: "What a full-service catering proposal is paying for",
        paragraphs: [
          "The food is only the most visible part of a catered event. Before the first guest arrives, a team may be writing a menu, sourcing ingredients, preparing in a licensed kitchen, packing equipment, loading vehicles, traveling, setting the room, and finishing food on site. After service, that same team clears, packs, cleans, and returns everything to its proper place.",
          "That is why two proposals with a similar menu can have very different totals. One may include service staff, china, glassware, linens, water service, setup, and breakdown. Another may include food in disposable pans for pickup. Both can be appropriate, but they are not the same product.",
        ],
        bullets: [
          "Menu development, ingredient sourcing, and kitchen preparation",
          "Delivery, load-in, onsite finishing, setup, and breakdown",
          "Chefs, servers, bartenders, captains, and support staff",
          "Serving equipment, tabletop rentals, linens, and specialty pieces",
          "Planning time, venue coordination, and dietary accommodations",
        ],
      },
      {
        id: "six-price-drivers",
        heading: "The six details that move catering cost the most",
        paragraphs: [
          "Guest count is the starting point, but it is not a simple multiplication problem. A larger group needs more food, while the service plan determines how many hands, ovens, tables, and hours are needed to serve it gracefully.",
          "Menu ingredients matter too. Seasonal vegetables, composed salads, and braised dishes have a different cost structure than lobster, tenderloin, or labor-intensive individual hors d’oeuvres. A custom menu lets priorities show up on the plate without spending equally on every course.",
        ],
        bullets: [
          "Guest count and the length of the event",
          "Passed, buffet, station, family-style, or plated service",
          "Number and complexity of courses",
          "Staffing level and service expectations",
          "Venue access, kitchen capacity, travel, and load-in requirements",
          "Rentals, bar setup, beverages, and specialty equipment",
        ],
      },
      {
        id: "service-style",
        heading: "Buffet, stations, or plated dinner: which costs less?",
        paragraphs: [
          "A buffet can reduce some dining-room labor, but it still needs thoughtful setup, replenishment, temperature control, and clearing. Stations add energy and variety, though multiple displays or chef-attended elements can require more equipment and staff. A plated dinner offers a polished, paced experience and usually calls for the most coordinated kitchen and service team.",
          "There is no universally least-expensive format. A generous buffet with several proteins can cost more than a focused plated menu. The better question is which service style fits the room, timing, guest mix, and feeling you want to create.",
        ],
        callout:
          "Choose the experience first. Then ask your caterer to shape the menu so the budget is spent where guests will notice it most.",
      },
      {
        id: "venue-logistics",
        heading: "Why the venue changes the proposal",
        paragraphs: [
          "Catering in a private Downingtown home is different from catering at a Chester County barn, a Main Line studio, or an office. A venue with a commercial kitchen, easy loading, tables, and service ware gives the team a different starting point than a raw space with limited power and no running water near the event area.",
          "Share the address early. Parking, stairs, elevators, refrigeration, power, prep space, open-flame policies, trash removal, and the required arrival window all affect the operating plan. A careful caterer asks about these details before they become last-minute costs.",
        ],
      },
      {
        id: "compare-proposals",
        heading: "How to compare catering proposals fairly",
        paragraphs: [
          "Start by aligning the scope. Confirm the same guest count, service duration, menu courses, staffing, rentals, taxes, gratuities or service charges, delivery, setup, and cleanup. If one proposal is much lower, look for the line item that is handled differently or left to the host.",
          "Ask what happens if the guest count changes and when the final number is due. Clarify whether dietary meals are included, who provides water and nonalcoholic beverages, and whether leftovers can be safely packaged. A complete proposal should make responsibilities clear—not create a scavenger hunt.",
        ],
        bullets: [
          "Is staffing included, and for how many hours?",
          "Who provides tables, linens, plates, flatware, and glassware?",
          "Are delivery, setup, breakdown, and trash removal included?",
          "What kitchen or equipment must the venue provide?",
          "Are tax, administrative fees, or gratuity included in the total?",
        ],
      },
      {
        id: "budget-wisely",
        heading: "Ways to protect the budget without flattening the experience",
        paragraphs: [
          "A shorter menu done beautifully often feels more generous than an oversized menu stretched thin. Put the emphasis on a memorable welcome bite, one excellent main course, seasonal sides, or a strong dessert moment. Let the season guide ingredients and choose a service style that works naturally in the space.",
          "Accurate guest counts help as much as menu edits. So does booking a venue with the right infrastructure. If a bar is part of the event, plan it alongside the food so staffing, glassware, ice, mixers, and timing are coordinated from the beginning.",
        ],
      },
      {
        id: "dragonfly-proposal",
        heading: "What to send for a useful Dragonfly proposal",
        paragraphs: [
          "The most helpful first inquiry includes the event date, location, estimated guest count, occasion, service style, dietary needs, and the kind of atmosphere you want. If you already have a venue, share its name and any catering rules. If you are still looking, say that too—Dragonfly can point you toward spaces the team knows.",
          "From its Downingtown home base, Dragonfly builds custom proposals for gatherings across Chester County, the Main Line, and select nearby communities. Each proposal connects the menu to the real room, schedule, and guest experience.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does catering cost per person in Chester County?",
        answer:
          "There is no single reliable per-person figure because delivery catering, a staffed buffet, and a multi-course plated dinner include very different labor, equipment, and service. A useful estimate requires the date, location, guest count, menu direction, and desired service style.",
      },
      {
        question: "Is buffet catering always less expensive than plated service?",
        answer:
          "Not always. Buffets may need fewer dining-room servers, but menu variety, equipment, display, and replenishment affect the total. A focused plated menu can sometimes compare favorably with an elaborate buffet.",
      },
      {
        question: "Do catering prices include rentals and staff?",
        answer:
          "It depends on the caterer and proposal. Ask whether staffing, china, flatware, glassware, linens, serving equipment, setup, breakdown, tax, and service charges are included before comparing totals.",
      },
      {
        question: "When should I request a catering proposal?",
        answer:
          "Reach out when you have a date, approximate guest count, and location. Popular wedding weekends, spring and fall celebrations, and holiday dates tend to require more lead time.",
      },
    ],
    relatedServices: [
      { label: "Custom Catering", href: "/custom-catering" },
      { label: "Sample Menus", href: "/sample-menus" },
      { label: "Weddings & Showers", href: "/wedding-catering-rehearsal-dinners-showers" },
    ],
  },
  {
    slug: "corporate-catering-chester-county-guide",
    category: "Corporate events",
    title: "Corporate Catering in Chester County: A Planning Guide",
    shortTitle: "A better catered workday",
    description:
      "Plan corporate catering in Chester County and the Main Line, from board lunches and client dinners to employee celebrations and holiday parties.",
    intro:
      "The best corporate catering supports the purpose of the room. It keeps a meeting moving, makes a client feel considered, and gives the host fewer details to manage in public.",
    quickAnswer:
      "For a successful corporate event, match the menu and service style to the agenda, room, and amount of time guests have to eat. Confirm dietary needs, access, setup, cleanup, and a single onsite contact before the event day.",
    published: "2026-08-28",
    publishedLabel: "August 28, 2026",
    readingTime: "8 minute read",
    hero: {
      src: "/assets/dragonfly/photos/july-2026/dragonfly-catering-buffet-team.webp",
      alt: "Dragonfly Catering team preparing a polished buffet for an event",
      position: "center 42%",
    },
    feature: {
      src: "/assets/dragonfly/photos/july-2026/dragonfly-event-table-setting.webp",
      alt: "A thoughtfully set table ready for a catered company dinner",
    },
    sections: [
      {
        id: "start-with-agenda",
        heading: "Start with the agenda, not the entrée",
        paragraphs: [
          "A working lunch with a 30-minute break needs a different plan than a two-hour client dinner. Begin with arrival time, presentation blocks, breaks, and the moment food should become available. That timeline determines whether individual lunches, a buffet, passed bites, or a seated meal will be easiest for guests.",
          "Consider the room as well. Will people eat at conference tables with laptops open? Are there enough surfaces for plates and drinks? Does the team need to reset the space between sessions? Corporate catering works best when food service is designed as part of the event flow.",
        ],
      },
      {
        id: "choose-format",
        heading: "Choose the right format for the gathering",
        paragraphs: [
          "Individual meals are efficient when timing is tight or guests will remain at their seats. Buffets offer choice and can serve a group quickly when there is enough room for a clear line. Stations encourage movement and conversation, making them a natural fit for networking and celebrations. Passed appetizers and a bar can turn an office into a more social setting after hours.",
          "For board dinners or important client gatherings, family-style or plated service gives the meal more ceremony. It also requires a quieter service plan so courses arrive without interrupting the conversation.",
        ],
        bullets: [
          "Board and leadership meetings: composed lunch or quiet buffet",
          "Training days: clearly labeled individual meals or a streamlined buffet",
          "Client receptions: passed bites, stations, and coordinated beverages",
          "Employee celebrations: generous buffet, stations, or cocktail-style service",
          "Holiday parties: food, bartending, rentals, and timeline planned together",
        ],
      },
      {
        id: "dietary-needs",
        heading: "Make dietary planning part of hospitality",
        paragraphs: [
          "Ask attendees about allergies and dietary needs during registration instead of after the menu is approved. Give the caterer a clear count and distinguish a preference from a medically serious allergy. The kitchen may need separate preparation, packaging, utensils, or service procedures.",
          "Labels should be easy to read without making anyone ask for help in front of colleagues. A well-designed menu can include vegetarian, vegan, or gluten-aware choices naturally, so accommodations feel like part of the table rather than an afterthought.",
        ],
      },
      {
        id: "office-logistics",
        heading: "Plan for office and venue logistics",
        paragraphs: [
          "Office buildings create their own choreography: loading docks, security desks, freight elevators, parking validation, limited kitchen access, and rules about open flames. Send those requirements early and reserve any elevators or loading windows the caterer will need.",
          "Identify where food can be staged, where trash goes, and who can answer a facilities question onsite. For venues around Downingtown, Exton, Malvern, and the Main Line, travel time and building access should be part of the schedule rather than added on the event morning.",
        ],
        callout:
          "Name one decision-maker and one onsite logistics contact. That small step prevents a surprising amount of event-day confusion.",
      },
      {
        id: "beverage-service",
        heading: "Coordinate beverages and bartending early",
        paragraphs: [
          "Coffee, water, and nonalcoholic drinks affect tables, cups, ice, waste, and service timing. For an evening event, a bar adds mixers, garnishes, glassware, chilling, staffing, and responsible service to the plan.",
          "Dragonfly offers RAMP-certified bartending and provides the bar setup, mixers, garnishes, and service plan while the client provides the alcohol. Planning food and beverage together creates a more accurate equipment list and a smoother guest experience.",
        ],
      },
      {
        id: "timeline",
        heading: "A practical corporate catering timeline",
        paragraphs: [
          "Reserve the date as soon as the event is approved, especially for December, graduation season, or a large company milestone. Confirm the menu and service direction once the agenda and venue are stable. Collect dietary needs before the final count deadline and send building access instructions well before the event.",
          "On the day, protect a realistic setup window. A beautiful buffet or reception should look effortless when guests enter, which means the team needs time to unload, finish, arrange, and solve small room-specific details before the doors open.",
        ],
      },
      {
        id: "request-proposal",
        heading: "What to include in a corporate catering inquiry",
        paragraphs: [
          "Share the date, address, guest count, schedule, occasion, budget context, and desired service style. Note whether the event is internal, client-facing, or celebratory; each calls for a slightly different level of presentation and pacing.",
          "Dragonfly creates custom corporate catering plans from its Downingtown base for Chester County, the Main Line, and select nearby Pennsylvania communities. The goal is food that reflects well on the host and service that understands the room.",
        ],
      },
    ],
    faqs: [
      {
        question: "What kinds of corporate events does Dragonfly cater?",
        answer:
          "Dragonfly caters board and client dinners, office lunches, retreats, workshops, networking receptions, employee celebrations, holiday parties, and other custom company gatherings.",
      },
      {
        question: "Can corporate catering include setup and cleanup?",
        answer:
          "Yes. The service plan can include delivery, setup, onsite staff, clearing, and breakdown. The exact scope is listed in the custom proposal.",
      },
      {
        question: "Can you accommodate dietary restrictions for an office group?",
        answer:
          "Yes. Share allergies and dietary requirements with accurate counts as early as possible so the menu, preparation, labeling, and service plan can be designed appropriately.",
      },
      {
        question: "Does Dragonfly offer bartending for company events?",
        answer:
          "Yes. Dragonfly offers RAMP-certified bartending and can plan mixers, garnishes, signature drinks, mocktails, portable bar needs, glassware, and service timing. The client provides the alcohol.",
      },
    ],
    relatedServices: [
      { label: "Corporate Catering", href: "/corporate-catering" },
      { label: "Event Bartending", href: "/event-bartending" },
      { label: "Sample Menus", href: "/sample-menus" },
    ],
  },
  {
    slug: "party-catering-30-50-guests-chester-county",
    category: "Social events",
    title: "Party Catering for 30–50 Guests in Chester County",
    shortTitle: "Feeding a party of 30–50",
    description:
      "Plan party catering for 30 to 50 guests in Chester County, including menu size, buffet flow, staffing, drinks, timing, and venue considerations.",
    intro:
      "Thirty to fifty guests is a wonderfully social size: enough people to create energy, still intimate enough for the food and service to feel personal.",
    quickAnswer:
      "For 30–50 guests, choose one clear service style, build a focused menu with enough variety for dietary needs, and plan the room around natural guest flow. Food quantities, staff, rentals, and bar service should all be based on the event length and how guests will eat—not guest count alone.",
    published: "2026-08-28",
    publishedLabel: "August 28, 2026",
    readingTime: "9 minute read",
    hero: {
      src: "/assets/dragonfly/photos/july-2026/dragonfly-grazing-table-event.webp",
      alt: "A colorful grazing table prepared for a Chester County celebration",
      position: "center 48%",
    },
    feature: {
      src: "/assets/dragonfly/photos/july-2026/dragonfly-guests-private-dinner.webp",
      alt: "Guests enjoying an intimate catered dinner together",
      position: "center 44%",
    },
    sections: [
      {
        id: "right-size-menu",
        heading: "Build a menu for the way guests will eat",
        paragraphs: [
          "Food quantity depends on more than the number of invitations. A two-hour afternoon shower, a four-hour birthday dinner, and an open-house graduation party all create different appetites. Time of day, event length, alcohol service, guest age, and whether the food replaces a meal should guide the menu.",
          "More choices are not always more generous. Every added dish divides the kitchen’s attention and can increase equipment, table space, and waste. A focused menu with contrast—something bright, something comforting, a strong main element, and a thoughtful finish—usually creates a better experience.",
        ],
      },
      {
        id: "service-style",
        heading: "Pick one service style that fits the room",
        paragraphs: [
          "A cocktail-style party with passed bites and a grazing table keeps guests moving. A buffet works well for birthdays, graduations, anniversaries, and family celebrations when there is space for a clean line. Stations create a sense of abundance and give guests reasons to circulate. A plated dinner feels intimate and celebratory when everyone can be seated comfortably.",
          "Look at the room before deciding. A buffet needs approach space, plate pickup, room to return for seconds, and a place for used dishes. Passed service needs clear walking paths. Seated service needs enough room behind chairs for staff to move safely.",
        ],
        bullets: [
          "Open house: replenished displays and easy-to-eat portions",
          "Shower or brunch: buffet, family-style, or light plated service",
          "Milestone birthday: passed welcome bites followed by dinner",
          "Graduation: flexible buffet that handles staggered arrivals",
          "Anniversary: seated dinner or polished cocktail reception",
        ],
      },
      {
        id: "portion-planning",
        heading: "Why portion planning is not a simple calculator",
        paragraphs: [
          "Online calculators can offer a rough starting point, but caterers plan a menu as a whole. Several appetizers, for example, are portioned differently when followed by dinner than when they are the entire meal. A buffet needs enough of every item to feel available while also accounting for how guests combine dishes.",
          "Children, dietary meals, late arrivals, and the event schedule all matter. Tell the caterer how the invitation describes the food—light bites, brunch, dinner, or dessert—so guests and kitchen are planning for the same experience.",
        ],
        callout:
          "The invitation sets an expectation. If guests are told dinner will be served, the menu and quantities need to carry the full evening.",
      },
      {
        id: "staffing",
        heading: "Decide how much help the host should have",
        paragraphs: [
          "Delivery may be right for a casual gathering when the host has people ready to set, monitor, clear, and clean. Full service changes the host’s role. Staff can welcome vendors, arrange food, replenish, clear glassware, manage trash, and reset the room while the host stays with guests.",
          "For a party of 30–50, even one or two logistical bottlenecks become visible. Think about the front door, coat area, bar, buffet, restrooms, and seating. A service plan should keep those zones from competing with one another.",
        ],
      },
      {
        id: "drinks",
        heading: "Give drinks their own plan",
        paragraphs: [
          "Water, ice, cups, coffee, mixers, garnishes, and glassware take more space than many hosts expect. Put the beverage area away from the food line so one does not block the other. Offer an appealing alcohol-free option instead of treating it as a substitute.",
          "If alcohol is served, professional bartending lets someone monitor pace, keep the station clean, and manage supplies. Dragonfly’s RAMP-certified bartending can be coordinated with the catering proposal; clients provide the alcohol while the service plan covers the rest of the bar experience.",
        ],
      },
      {
        id: "venue-options",
        heading: "Host at home, at a venue, or at Dragonfly",
        paragraphs: [
          "A private home can feel especially warm, but evaluate parking, restrooms, kitchen access, furniture, weather backup, and what needs to be moved before the event. A rented venue may solve those issues while adding rules, access windows, and rental requirements.",
          "Dragonfly’s Downingtown event space hosts intimate gatherings of up to 50 guests, including showers, dinners, workshops, and celebrations. Dragonfly also works at private homes, offices, and venues across Chester County, the Main Line, and select nearby communities.",
        ],
      },
      {
        id: "planning-checklist",
        heading: "A simple checklist for a 30–50 person party",
        paragraphs: [
          "Start with the non-negotiables: date, location, approximate count, occasion, and budget context. Then decide whether the event is primarily a meal or a social gathering with food. That answer will make the menu, seating, and timing much easier to shape.",
        ],
        bullets: [
          "Confirm a comfortable capacity, not only the legal maximum",
          "Map food, drinks, seating, and guest movement",
          "Collect dietary needs before the final count",
          "Choose who handles setup, replenishment, clearing, and cleanup",
          "Create a weather plan for any outdoor portion",
          "Give vendors one onsite contact and a realistic arrival window",
        ],
      },
    ],
    faqs: [
      {
        question: "How much food do I need for 50 guests?",
        answer:
          "The amount depends on event length, time of day, service style, menu variety, alcohol service, and whether the food is a full meal. A caterer should portion the entire menu together rather than applying one number to every dish.",
      },
      {
        question: "What is the easiest catering style for 30–50 people?",
        answer:
          "A streamlined buffet is flexible for many parties, while passed bites or stations suit more social events. The easiest format is the one that fits the room, schedule, seating, and amount of service the host wants.",
      },
      {
        question: "Can Dragonfly host a party for 50 guests?",
        answer:
          "Dragonfly’s intimate Downingtown event space accommodates gatherings of up to 50 guests. Final layout and comfort depend on the event format, seating, and other room requirements.",
      },
      {
        question: "Does Dragonfly cater birthdays and graduation parties?",
        answer:
          "Yes. Dragonfly creates custom menus for birthdays, graduations, anniversaries, engagement parties, showers, holiday gatherings, and other social events.",
      },
    ],
    relatedServices: [
      { label: "Social Events", href: "/social-events" },
      { label: "Dragonfly Event Space", href: "/dragonfly-event-space" },
      { label: "Event Bartending", href: "/event-bartending" },
    ],
  },
  {
    slug: "small-event-venues-chester-county-pa",
    category: "Venue planning",
    title: "Small Event Venues in Chester County for 25–50 Guests",
    shortTitle: "Finding the right small venue",
    description:
      "Find the right small event venue in Chester County or the Main Line for 25 to 50 guests, with practical advice for showers, dinners, and celebrations.",
    intro:
      "A small event should feel intimate, not undersized. The right room lets guests settle in easily, gives food and drinks a natural place, and leaves enough breathing room for the celebration to unfold.",
    quickAnswer:
      "For 25–50 guests, compare venues by comfortable seated capacity, catering rules, kitchen and load-in access, parking, accessibility, rentals, event hours, and cleanup—not capacity alone. Tour the room using the layout your event actually needs.",
    published: "2026-08-28",
    publishedLabel: "August 28, 2026",
    readingTime: "9 minute read",
    hero: {
      src: "/images/venues/blue-heron.webp",
      alt: "Light-filled brick interior of a small event venue in Malvern",
      position: "center 50%",
    },
    feature: {
      src: "/assets/dragonfly/photos/july-2026/dragonfly-private-dinner-table.webp",
      alt: "An intimate dinner table arranged for a private catered event",
      position: "center 55%",
    },
    sections: [
      {
        id: "comfortable-capacity",
        heading: "Capacity and comfortable capacity are different",
        paragraphs: [
          "A venue may technically hold 50 people but feel crowded once dining tables, a buffet, bar, gifts, dessert, music, and a coat area are added. Ask how many guests fit in the exact layout you want: seated meal, classroom, cocktail reception, shower, or workshop.",
          "Request a floor plan or bring rough measurements to the tour. Leave wider paths near doors, restrooms, the bar, and any place staff will carry hot food. An intimate room feels generous when circulation has been designed into it.",
        ],
      },
      {
        id: "venue-questions",
        heading: "Questions to ask every small event venue",
        paragraphs: [
          "The rental fee rarely tells the whole story. Some spaces include tables and chairs; others are a beautiful empty room. Some require preferred vendors, event insurance, security, or a professional planner. Ask for all policies and required fees in writing before comparing venues.",
        ],
        bullets: [
          "What is the seated capacity for our planned layout?",
          "Can we bring an outside caterer and bartender?",
          "What kitchen, refrigeration, power, and water are available?",
          "Are tables, chairs, linens, china, or glassware included?",
          "How much setup and breakdown time is included?",
          "Is parking onsite, nearby, accessible, and well lit?",
          "What are the alcohol, music, décor, candle, and cleanup rules?",
        ],
      },
      {
        id: "match-occasion",
        heading: "Match the room to the occasion",
        paragraphs: [
          "Bridal and baby showers benefit from daylight, flexible seating, room for gifts, and an easy buffet or brunch setup. Rehearsal dinners need comfortable dining and enough acoustic control for conversation and toasts. Birthday and anniversary parties may need a more flexible mix of standing and seated space.",
          "For workshops or company gatherings, look for reliable Wi-Fi, presentation capability, accessible power, and food service that will not interrupt the program. The most photogenic room is not always the most functional one; the best venue gives the event what it needs without constant workarounds.",
        ],
      },
      {
        id: "chester-county-options",
        heading: "Small-event options Dragonfly knows in Chester County",
        paragraphs: [
          "Dragonfly works in private homes, offices, and venues throughout the region. Confirmed venue relationships include Work2Gether locations in Downingtown, Kennett Square, and Phoenixville; Cross Gables Estate in Exton; Upland Farm Park in Chester Springs; Blue Heron and Bask Collective in Malvern; and other distinctive spaces across and beyond Chester County.",
          "Each venue has its own capacity, vendor rules, and event style. Availability and policies can change, so contact the venue directly for current details. Dragonfly’s preferred-venues directory is a useful starting point, not a limit on where the team can cater.",
        ],
        callout:
          "Already found a room you love? Dragonfly is happy to coordinate with venues beyond the preferred list.",
      },
      {
        id: "dragonfly-space",
        heading: "The Dragonfly event space in Downingtown",
        paragraphs: [
          "Dragonfly’s own intimate event space is located at 4325 Lincoln Highway in Downingtown. It hosts gatherings of up to 50 guests, including showers, tea parties, private dinners, workshops, meetings, and celebrations.",
          "Having the caterer and room under one roof simplifies communication around food, service, timing, and setup. The right layout still depends on the event: a seated dinner, cocktail gathering, and hands-on workshop use the capacity differently. Share your guest count and format when requesting a tour or proposal.",
        ],
      },
      {
        id: "main-line-options",
        heading: "Small venues along the Main Line",
        paragraphs: [
          "For hosts looking toward Malvern and the Main Line, Dragonfly has confirmed preferred relationships with Blue Heron and Bask Collective in Malvern. Both offer a more intimate alternative to a traditional ballroom and can suit showers, workshops, private gatherings, and design-conscious celebrations.",
          "Private Main Line homes are also a natural setting for chef dinners, cocktail parties, and milestone events. A caterer can assess the kitchen, access, rentals, staffing, and guest flow so the home remains welcoming rather than overwhelmed.",
        ],
      },
      {
        id: "tour-checklist",
        heading: "Bring the real event to the venue tour",
        paragraphs: [
          "Walk the route a guest will take from parking to the entrance, coat area, event room, bar, and restroom. Then walk the vendor route from unloading to kitchen or staging space. Notice stairs, narrow doors, uneven ground, and places where two flows cross.",
          "Take photos and write down what is included. Ask where food can be finished, where staff belongings go, and what must be removed at the end of the night. A clear venue picture allows the catering proposal to account for the room from the beginning.",
        ],
      },
    ],
    faqs: [
      {
        question: "What size venue do I need for 50 guests?",
        answer:
          "Choose based on the planned layout, not capacity alone. Fifty seated guests plus a buffet, bar, gifts, or presentation area need more room than a 50-person cocktail reception.",
      },
      {
        question: "Does Dragonfly have an event space in Downingtown?",
        answer:
          "Yes. Dragonfly Catering & Event Space is located at 4325 Lincoln Highway in Downingtown and hosts intimate gatherings of up to 50 guests.",
      },
      {
        question: "Can Dragonfly cater at a venue not on its preferred list?",
        answer:
          "Yes. The preferred list includes spaces Dragonfly knows and recommends, but the team is happy to coordinate with another venue, office, or private home.",
      },
      {
        question: "What events work well in a small venue?",
        answer:
          "Showers, rehearsal dinners, birthdays, anniversaries, engagement parties, private dinners, workshops, meetings, and holiday gatherings can all work well when the layout suits the guest count and program.",
      },
    ],
    relatedServices: [
      { label: "Dragonfly Event Space", href: "/dragonfly-event-space" },
      { label: "Preferred Venues", href: "/preferred-venues" },
      { label: "Service Areas", href: "/service-areas" },
    ],
  },
  {
    slug: "private-chef-chester-county-cost-experience",
    category: "Private dining",
    title: "Private Chef in Chester County: Cost & What to Expect",
    shortTitle: "What a private chef dinner feels like",
    description:
      "Learn what an in-home private chef dinner includes, what affects cost per person, and how to plan a private dining experience in Chester County or the Main Line.",
    intro:
      "A private chef dinner brings the rhythm and care of a restaurant into the place where you are most comfortable. The menu is personal, the pace belongs to your table, and the drive home is a walk to the next room.",
    quickAnswer:
      "A one-time private chef experience typically includes menu planning, ingredient sourcing, preparation, onsite cooking, plating or service, and kitchen cleanup. Cost depends on guest count, menu complexity, ingredients, staffing, rentals, travel, and the kitchen available at the home.",
    published: "2026-08-28",
    publishedLabel: "August 28, 2026",
    readingTime: "8 minute read",
    hero: {
      src: "/assets/dragonfly/photos/july-2026/chef-matt-private-chef-service.webp",
      alt: "Chef Matt preparing an in-home private chef dinner",
      position: "center 40%",
    },
    feature: {
      src: "/assets/dragonfly/photos/july-2026/dragonfly-herb-rack-of-lamb.webp",
      alt: "Herb-crusted rack of lamb prepared for a private dinner",
      position: "center 48%",
    },
    sections: [
      {
        id: "what-it-is",
        heading: "Private chef, personal chef, or catering?",
        paragraphs: [
          "People often use the terms interchangeably, but the occasion usually reveals what they mean. A personal chef may prepare recurring meals for a household. A private chef experience is often a one-time dinner built around a particular date and group. Catering can cover a wider range of guest counts, venues, and service formats.",
          "Dragonfly’s private chef experiences are occasion-led: date nights, birthdays, anniversaries, family gatherings, and dinners with friends. Chef Matt creates the menu, prepares and serves the meal in your home, and leaves the kitchen cared for at the end of the evening.",
        ],
      },
      {
        id: "what-is-included",
        heading: "What an in-home chef experience includes",
        paragraphs: [
          "The experience begins before anyone turns on the stove. The chef learns about the occasion, preferences, dietary needs, guest count, kitchen, and desired pace. A custom menu brings those details together, followed by ingredient sourcing and advance preparation.",
          "On the event day, the chef arrives with the planned ingredients and equipment, completes the cooking, plates or serves each course, and cleans the working areas used for the dinner. Staffing, tabletop rentals, or beverage service can be added when the size and style of the gathering call for them.",
        ],
        bullets: [
          "A menu shaped around the occasion and guests",
          "Ingredient sourcing and advance preparation",
          "Cooking and finishing in the home",
          "Course pacing, plating, and service as proposed",
          "Cleanup of the kitchen work areas used by the team",
        ],
      },
      {
        id: "cost-drivers",
        heading: "What affects private chef cost per person",
        paragraphs: [
          "Guest count matters, but a private dinner also has fixed planning, shopping, travel, preparation, and cleanup time. That is why a dinner for two is not simply one-quarter of the cost of a dinner for eight. The number of courses, ingredient choices, handwork, and level of service all influence the proposal.",
          "Rentals may be needed if the menu calls for more plates, flatware, or glassware than the home has. An additional server can make sense for a larger table or more formal service. If the kitchen is far from the dining area—or has limited oven, refrigeration, or counter space—the chef may adapt the menu or bring equipment.",
        ],
        callout:
          "The most accurate quote starts with the menu experience and the realities of the home, not a generic per-person package.",
      },
      {
        id: "menu-process",
        heading: "How the custom menu comes together",
        paragraphs: [
          "Begin with what you enjoy, not what sounds formal. Share favorite ingredients, cuisines, restaurant memories, seasonal cravings, and anything the table dislikes. Mention allergies separately and explain their severity so preparation can be planned responsibly.",
          "A good private dinner has an arc. A bright first course can lead into something deeper and more comforting, followed by a finish that feels complete without being heavy. Seasonal ingredients help the meal feel connected to Chester County rather than copied from an all-year template.",
        ],
      },
      {
        id: "prepare-home",
        heading: "How to prepare your kitchen and home",
        paragraphs: [
          "The chef does not need a showroom kitchen, but clear information helps. Share photos or notes about the oven, stovetop, refrigerator space, sink, counters, stairs, parking, and the route between kitchen and table. Make room in the refrigerator if requested and clear personal items from the main work surfaces.",
          "Set the mood in the dining area and let the kitchen be a working space. Decide whether guests would enjoy watching some of the preparation or prefer the courses to appear with less theater. Pets, children, and narrow walkways should be considered so hot pans and service paths remain safe.",
        ],
      },
      {
        id: "best-occasions",
        heading: "Occasions that suit a private chef dinner",
        paragraphs: [
          "Private dining is especially useful when conversation matters. There is no reservation time, restaurant noise, divided check, or pressure to leave the table. The evening can move around a toast, a surprise, children’s bedtime, or a course enjoyed slowly.",
        ],
        bullets: [
          "Anniversaries and milestone birthdays",
          "Date nights and marriage proposals",
          "Family reunions and holiday dinners",
          "Small client or board dinners",
          "A gift experience for someone who loves food",
          "Dinner with friends in a Chester County or Main Line home",
        ],
      },
      {
        id: "booking",
        heading: "Booking a private chef in Chester County",
        paragraphs: [
          "Send the date, address, guest count, occasion, dietary needs, and a sense of the experience you want. Photos of the kitchen are helpful. If you would like wine, cocktails, or nonalcoholic pairings, mention that early so beverage service and glassware can be considered with the courses.",
          "Dragonfly serves private chef dinners from its Downingtown base throughout Chester County, the Main Line, and select nearby Pennsylvania communities. Every proposal is custom, so the dinner fits the people at the table and the home around it.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a private chef cost per person?",
        answer:
          "The price depends on guest count, courses, ingredients, staffing, rentals, travel, and the kitchen. Because planning and preparation include fixed work, very small dinners do not scale in a simple per-person way.",
      },
      {
        question: "Does a private chef bring the ingredients?",
        answer:
          "For Dragonfly private chef experiences, ingredient sourcing and preparation are built into the custom proposal. Any special client responsibilities are confirmed before the event.",
      },
      {
        question: "Does the chef clean the kitchen afterward?",
        answer:
          "Dragonfly cleans the kitchen work areas and cooking equipment used by the team as part of the agreed service. The exact scope is described in the proposal.",
      },
      {
        question: "Can a private chef accommodate allergies?",
        answer:
          "Share allergies and their severity before the menu is developed. The chef can then discuss suitable dishes and any limitations created by the home kitchen or ingredient environment.",
      },
    ],
    relatedServices: [
      { label: "Private Chef Experiences", href: "/private-chef-experiences" },
      { label: "Sample Menus", href: "/sample-menus" },
      { label: "Gift Cards", href: "/gift-cards" },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
