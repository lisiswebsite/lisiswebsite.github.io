const players = [
    { no: 1, name: "Beau Alvarez", pos: "C", year: "Junior", ht: "6'1\"", wt: "210 lbs", hometown: "Redondo Beach, CA", school: "Redondo Union HS", bt: "R/R", image: "images/1 Beau Alvarez.jpg",
        bioLink: '1_BeauAlvarez.html',
        major: "Architecture",
        food: "Fish tacos",
        interests: "Surfing, The Last Dance (TV), Inception (movie), The Weeknd (music)",
        funfact: "Makes $5,000 a month on Cameo",},
    { no: 2, name: "Kyson Frost", pos: "OF", year: "Junior", ht: "6'0\"", wt: "185 lbs", hometown: "Atlanta, GA", school: "Marist HS", bt: "R/R", image: "images/2 Kyson Frost.jpg",
        bioLink: '2_KysonFrost.html',
        major: "Painting",
        food: "Breakfast",
        interests: "Crossword puzzles, Parks & Rec (TV), Interstellar (movie), Dune (book)",
        funfact: "Spent a night in the American Museum of Natural History, like in that movie",},
    { no: 3, name: "Garret Smink", pos: "UT", year: "Junior", ht: "6'2\"", wt: "210 lbs", hometown: "Newton, MA", school: "Newton North HS", bt: "R/R", image: "images/3 Garret Smink.jpg",
        bioLink: '3_GarretSmink.html',
        major: "Illustration",
        food: "Homemade pasta",
        interests: "Cooking, karaoke, The Grand Budapest Hotel (movie), 80s music",
        funfact: "Tries every year to organize a flash mob with teammates (so far unsuccessful)",},
    { no: 4, name: "Bryce Ready", pos: "INF", year: "Freshman", ht: "6'1\"", wt: "220 lbs", hometown: "Murrysville, PA", school: "Franklin Regional HS", bt: "R/R", image: "images/4 Bryce Ready.jpg",
        bioLink: '4_BryceReady.html',
        major: "Graphic design",
        food: "Pierogi",
        interests: "RPG games, The Office (TV), Lil Uzi Vert (music), The Great Gatsby (book)",
        funfact: "Can mimic 34 different bird calls",},
    { no: 5, name: "KJ DeBarge", pos: "INF", year: "Junior", ht: "6'3\"", wt: "190 lbs", hometown: "Potomac, MD", school: "Bullis HS", bt: "R/R", image: "images/5 KJ DeBarge.jpg",
        bioLink: '5_KJDeBarge.html',
        major: "Architecture",
        food: "Protein bowl",
        interests: "Succession (TV), Creed (movie), Future (music), Delirious New York (book)",
        funfact: "Is followed by Alex Rodriguez on Instagram",},
    { no: 6, name: "Tanner Swain", pos: "INF", year: "Sophomore", ht: "6'5\"", wt: "240 lbs", hometown: "Syracuse, NY", school: "Cicero-North Syracuse HS", bt: "R/R", image: "images/6 Tanner Swain.jpg",
        bioLink: '6_TannerSwain.html',
        major: "Printmaking",
        food: "Bacon cheeseburgers",
        interests: "Ted Lasso (TV), Coach Carter (movie), Remember the Titans (movie), Post Malone (music)",
        funfact: "Once got lost in the woods for three days",},
    { no: 7, name: "Trey Favors", pos: "INF", year: "Freshman", ht: "5'10\"", wt: "175 lbs", hometown: "San Diego, CA", school: "St. Augustine HS", bt: "L/R", image: "images/7 Trey Favors.jpg",
        bioLink: '7_TreyFavors.html',
        major: "Animation",
        food: "Breakfast burritos",
        interests: "Playing guitar, The Legend of Korra (TV), Spider-Man: Into the Spider-Verse (movie), Drake (music)",
        funfact: "Experienced ego death in 2022",},
    { no: 8, name: "Tatsunori Schmidt", pos: "UT", year: "Freshman", ht: "6'1\"", wt: "200 lbs", hometown: "Lexington, MA", school: "Minuteman Regional HS", bt: "L/L", image: "images/8 Tatsunori Schmidt.jpg",
        bioLink: '8_TatsunoriSchmidt.html',
        major: "Interior design",
        food: "Root beer float",
        interests: "The Last Kingdom (TV), Gladiator (movie), Imagine Dragons (music), The Wandering Earth (book)",
        funfact: "Spent a week living at LaGuardia while waiting for his lease to start",},
    { no: 9, name: "Walker Mendez", pos: "INF", year: "Sophomore", ht: "6'1\"", wt: "205 lbs", hometown: "Wayne, NJ", school: "Wayne Hills HS", bt: "L/R", image: "images/9 Walker Mendez.jpg",
        bioLink: '9_WalkerMendez.html',
        major: "Architecture",
        food: "Hot fudge sundae with whipped cream",
        interests: "Peaky Blinders (TV), The Dark Knight (movie), Queen (music), Fear and Loathing in Las Vegas (book)",
        funfact: "Hit a walk-off grand slam in high school",},
    { no: 10, name: "Clyde Babee", pos: "RHP", year: "Freshman", ht: "6'2\"", wt: "0 lbs", hometown: "Houston, TX", school: "Cy Ranch HS", bt: "R/R", image: "images/10 Clyde Babee.jpg",
        bioLink: '10_ClydeBabee.html',
        major: "Drawing",
        food: "Spaghetti and meatballs",
        interests: "Adventure Time (TV), Eternal Sunshine of the Spotless Mind (movie), Bon Iver (music), The Fault in Our Stars (book)",
        funfact: "Still trying to make money on Gamestop shares he bought in 2021",},
    { no: 11, name: "Khal Valdez", pos: "RHP", year: "Sophomore", ht: "6'0\"", wt: "180 lbs", hometown: "Naples, FL", school: "Gulf Coast HS", bt: "R/R", image: "images/11 Khal Valdez.jpg",
        bioLink: '11_KhalValdez.html',
        major: "Industrial design",
        food: "Shrimp cocktail",
        interests: "NASCAR, Impractical Jokers (TV), 21 Jump Street (movie), Smooth jazz (music)",
        funfact: "Hates revolving doors",},
    { no: 12, name: "Tressa Scar", pos: "OF", year: "Freshman", ht: "5'10\"", wt: "0 lbs", hometown: "San Marcos, CA", school: "San Marcos HS", bt: "R/R", image: "images/12 Tressa Scar.jpg",
        bioLink: '12_TressaScar.html',
        major: "Graphic design",
        food: "Fish tacos with avocado",
        interests: "Pickleball, Real Housewives of Beverly Hills (TV), The Challenge (TV), Doja Cat (music)",
        funfact: "Has a black belt in karate",},
    { no: 13, name: "Reese Witherspoon", pos: "RHP", year: "Sophomore", ht: "6'2\"", wt: "195 lbs", hometown: "San Antonio, TX", school: "Warren HS", bt: "R/R", image: "images/13 Reese Witherspoon.jpg",
        bioLink: '13_ReeseWitherspoon.html',
        major: "Illustration",
        food: "Jalapeño poppers",
        interests: "Westworld (TV), Fast & Furious (movie), Country (music), Ender's Game (book)",
        funfact: "Won an academy award for Walk the Line",},
    { no: 14, name: "RJ Zimbardo", pos: "C", year: "Freshman", ht: "5'10\"", wt: "180 lbs", hometown: "Fresno, CA", school: "Fresno HS", bt: "R/R", image: "images/14 RJ Zimbardo.jpg",
        bioLink: '14_RJZimbardo.html',
        major: "Industrial design",
        food: "Pizza",
        interests: "Golf, Succession (TV), Severance (TV), Tenet (movie), The Sun Also Rises (book)",
        funfact: "Is related to Philip Zimbardo, the psychologist behind the Stanford Prison Experiment",},
    { no: 15, name: "Dalton Seeker", pos: "OF", year: "Junior", ht: "6'2\"", wt: "190 lbs", hometown: "Mooresville, IN", school: "Mooresville HS", bt: "L/L", image: "images/15 Dalton Seeker.jpg",
        bioLink: '15_DaltonSeeker.html',
        major: "Animation",
        food: "Chicken & waffles",
        interests: "Board games, Firefly (TV), Radiohead (music), The Three-Body Problem (book)",
        funfact: "Owns a really expensive telescope",},
    { no: 16, name: "Dean Devine", pos: "LHP", year: "Junior", ht: "5'11\"", wt: "200 lbs", hometown: "Fort Smith, AR", school: "Northside HS", bt: "L/L", image: "images/16 Dean Devine.jpg",
        bioLink: '16_DeanDevine.html',
        major: "Graphic design",
        food: "BBQ & cornbread",
        interests: "Game of Thrones (TV), John Wick (movie), Morgan Wallen (music), Comic books",
        funfact: "Recreationally distills moonshine in a bathtub with his uncle",},
    { no: 17, name: "Griffin Kuntz", pos: "LHP", year: "Senior", ht: "6'1\"", wt: "190 lbs", hometown: "San Jose, CA", school: "Pioneer HS", bt: "L/L", image: "images/17 Griffin Kuntz.jpg",
        bioLink: '17_GriffinKuntz.html',
        major: "Film",
        food: "Spicy tuna poke bowl",
        interests: "Hiking, Mindhunter (TV), Akira Kurosawa & David Fincher (movies), Oasis (music)",
        funfact: "Brews his own kombucha",},
    { no: 18, name: "Clayton Krauss", pos: "RHP", year: "Senior", ht: "6'5\"", wt: "225 lbs", hometown: "Fairfield, CT", school: "Fairfield Warde HS", bt: "R/R", image: "images/18 Clayton Krauss.jpg",
        bioLink: '18_ClaytonKrauss.html',
        major: "Drawing",
        food: "Lobster rolls",
        interests: "Woodworking, Yellowstone (TV), The Godfather (movie), The Rolling Stones (music)",
        funfact: "Once caught a fish out of the ocean with his bare hand",},
    { no: 19, name: "Blake Blanco", pos: "OF", year: "Sophomore", ht: "6'2\"", wt: "210 lbs", hometown: "Phoenix, AZ", school: "O'Connor HS", bt: "R/R", image: "images/19 Blake Blanco.jpg",
        bioLink: '19_BlakeBlanco.html',
        major: "Illustration",
        food: "Carne asada enchiladas",
        interests: "The Sopranos (TV), The Avengers (movie), Migos (music), Ready Player One (book)",
        funfact: "Is thinking about becoming a Disney adult",},
    { no: 20, name: "Yorks Font", pos: "OF", year: "Junior", ht: "6'0\"", wt: "0 lbs", hometown: "Corona, CA", school: "Corona HS", bt: "R/R", image: "images/20 Yorks Font.jpg",
        bioLink: '20_YorksFont.html',
        major: "Architecture",
        food: "Acai bowls",
        interests: "Spikeball, New Girl (TV), Tame Impala (music), Underworld (book)",
        funfact: "Commutes around the city on a bike he stole from an SVA student",},
    { no: 21, name: "Carter Sass", pos: "OF", year: "Freshman", ht: "5'10\"", wt: "180 lbs", hometown: "Suwanee, GA", school: "North Gwinnett HS", bt: "R/R", image: "images/21 Carter Sass.jpg",
        bioLink: '21_CarterSass.html',
        major: "Interior design",
        food: "Cook Out",
        interests: "Workaholics (TV), Superbad (movie), Alan Jackson (music), The Great Gatsby (book)",
        funfact: "Once guessed the Wordle on his first try",},
    { no: 22, name: "Michael Vu", pos: "RHP", year: "Sophomore", ht: "6'2\"", wt: "180 lbs", hometown: "Las Vegas, NV", school: "Palo Verde HS", bt: "R/R", image: "images/22 Michael Vu.jpg",
        bioLink: '22_MichaelVu.html',
        major: "Graphic design",
        food: "Hot wings",
        interests: "Close-up magic, Brooklyn Nine-Nine (TV), Scott Pilgrim vs. the World (movie), Vampire Weekend (music)",
        funfact: "Can eat 50 hot wings in 6 minutes",},
    { no: 23, name: "Tyler Quinlan", pos: "OF", year: "Junior", ht: "6'1\"", wt: "215 lbs", hometown: "Keller, TX", school: "Keller HS", bt: "L/L", image: "images/23 Tyler Quinlan.jpg",
        bioLink: '23_TylerQuinlan.html',
        major: "Painting",
        food: "Steak & mashed potatoes",
        interests: "Playing video games, Breaking Bad (TV), Step Brothers (movie), Led Zeppelin (music)",
        funfact: "Built a working model train set",},
    { no: 24, name: "Jordan Mallory Jr.", pos: "OF", year: "Sophomore", ht: "6'2\"", wt: "200 lbs", hometown: "Bellaire, TX", school: "Episcopal HS", bt: "L/R", image: "images/24 Jordan Mallory Jr.jpg",
        bioLink: '24_JordanMalloryJr.html',
        major: "Animation",
        food: "Peach cobbler",
        interests: "Traveling, The Boondocks (TV), This Is The End (movie), Kendrick Lamar (music)",
        funfact: "Has a pet ferret named Ferret Bueller",},
    { no: 25, name: "Aaron Toole", pos: "RHP", year: "Freshman", ht: "5'11\"", wt: "170 lbs", hometown: "New York, NY", school: "Poly Prep HS", bt: "R/R", image: "images/25 Aaron Toole.jpg",
        bioLink: '25_AaronToole.html',
        major: "Graphic design",
        food: "Hawaiian pizza",
        interests: "Skateboarding, Psych (TV), Home Alone (movie), Lord of the Flies (book)",
        funfact: "Can solve a Rubik's cube in 40 seconds",},
    { no: 26, name: "Kellen Mercer", pos: "RHP", year: "Senior", ht: "6'2\"", wt: "205 lbs", hometown: "Narragansett, RI", school: "Narragansett HS", bt: "R/R", image: "images/26 Kellan Mercer.jpg",
        bioLink: '26_KellenMercer.html',
        major: "Architecture",
        food: "Grilled cheese sandwiches & tomato soup",
        interests: "Table tennis, I Think You Should Leave (TV), Top Gun Maverick (movie), Classic rock (music)",
        funfact: "Once had to go to the ER after being bitten by a raccoon",},
    { no: 27, name: "Nick Driscoll", pos: "RHP", year: "Freshman", ht: "5'11\"", wt: "175 lbs", hometown: "Oakwood, OH", school: "Oakwood HS", bt: "R/R", image: "images/27 Nick Driscoll.jpg",
        bioLink: '27_NickDriscoll.html',
        major: "Film",
        food: "Chipotle",
        interests: "True Detective (TV), Where the Wild Things Are (movie), Twenty One Pilots (music), The Big Field (book)",
        funfact: "Is really good at card tricks",},
    { no: 28, name: "Kenneth Couture", pos: "LHP", year: "Freshman", ht: "6'6\"", wt: "185 lbs", hometown: "Brooklyn, NY", school: "Jefferson HS", bt: "L/L", image: "images/28 Kenneth Couture.jpg",
        bioLink: '28_KennethCouture.html',
        major: "Fashion design",
        food: "Spicy buffalo wings",
        interests: "Real Housewives of New York (TV), Moonstruck (movie), Billie Eilish (music), On Earth We're Briefly Gorgeous (book)",
        funfact: "Was an extra in an episode of Law & Order SVU",},
    { no: 29, name: "Niko Serrano", pos: "INF", year: "Junior", ht: "6'0\"", wt: "185 lbs", hometown: "Winston-Salem, NC", school: "Oak Grove HS", bt: "L/R", image: "images/29 Niko Serrano.jpg",
        bioLink: '29_NikoSerrano.html',
        major: "Industrial design",
        food: "Cheeseburgers",
        interests: "Seinfeld (TV), Bad Boys 2 (movie), Young Thug (music), The Hitchhiker’s Guide to the Galaxy (book)",
        funfact: "Has crashed a couple weddings",},
    { no: 30, name: "Kermit Grastan", pos: "UT", year: "Junior", ht: "6'2\"", wt: "0 lbs", hometown: "Brookline, MA", school: "Brookline HS", bt: "R/R", image: "images/30 Kermit Grastan.jpg",
        bioLink: '30_KermitGrastan.html',
        major: "Illustration",
        food: "Fusion food",
        interests: "Learning about artificial intelligence, Black Mirror (TV), Coldplay (music), Snow Crash (book)",
        funfact: "Has a collection of old security footage that he watches in his free time",},
    { no: 31, name: "Chris McCrystal", pos: "LHP", year: "Senior", ht: "6'3\"", wt: "215 lbs", hometown: "Golden, CO", school: "Golden HS", bt: "L/L", image: "images/31 Chris McCrystal.jpg",
        bioLink: '31_ChrisMcCrystal.html',
        major: "Photography",
        food: "Steak & potatoes",
        interests: "Meteorology, White Collar (TV), The Godfather (movie), AC/DC (music)",
        funfact: "Is certified in falconry",},
    { no: 32, name: "Jurrangelo Kryszczuk", pos: "RHP", year: "Junior", ht: "6'5\"", wt: "220 lbs", hometown: "Gurnee, IL", school: "Warren Township HS", bt: "R/R", image: "images/32 Jurrangelo Kryszczuk.jpg",
        bioLink: '32_JurrangeloKryszczuk.html',
        major: "Fine arts",
        food: "Everything",
        interests: "MMA, The Amazing Race (TV), Olivia Rodrigo (music), Infinite Jest (book)",
        funfact: "Once caught a home run ball from a ferris wheel at a minor league game",},
    { no: 33, name: "Mitch Grinsell", pos: "C", year: "Senior", ht: "6'1\"", wt: "205 lbs", hometown: "Sugar Land, TX", school: "Fort Bend Clements HS", bt: "R/R", image: "images/33 Mitch Grinsell.jpg",
        bioLink: '33_MitchGrinsell.html',
        major: "Architecture",
        food: "Street tacos",
        interests: "Malcolm in the Middle (TV), Rocky III (movie), Dolly Parton (music), The Things They Carried (book)",
        funfact: "Has never lost a coin flip and never will",},
    { no: 34, name: "Matt Pennington", pos: "INF", year: "Junior", ht: "6'4\"", wt: "210 lbs", hometown: "Rockaway, NJ", school: "Morris Knolls HS", bt: "R/R", image: "images/34 Matt Pennington.jpg",
        bioLink: '34_MattPennington.html',
        major: "Industrial design",
        food: "Two black coffees",
        interests: "Working out, WWE SmackDown! (TV), The Wolf of Wall Street (movie), The Beatles (music)",
        funfact: "Dream job growing up was Abercrombie store model",},
    { no: 35, name: "Linzora Shatzman", pos: "LHP", year: "Sophomore", ht: "5'8\"", wt: "0 lbs", hometown: "Mason, OH", school: "Ursuline Academy", bt: "L/L", image: "images/35 Linzora Shatzman.jpg",
        bioLink: '35_LinzoraShatzman.html',
        major: "Fine arts",
        food: "Iced pumpkin spice latte",
        interests: "Escape rooms, true crime podcasts, Friends (TV), Beyonce (music)",
        funfact: "Won a watermelon seed-spitting contest at age 7",},
    { no: 36, name: "Dom Compton", pos: "RHP", year: "Junior", ht: "6'2\"", wt: "195 lbs", hometown: "Boca Raton, FL", school: "Boca Raton HS", bt: "R/R", image: "images/36 Dom Compton.jpg",
        bioLink: '36_DomCompton.html',
        major: "Graphic design",
        food: "Clif bars",
        interests: "Chess, New Girl (TV), Rebel Without a Cause (movie), J. Cole (music)",
        funfact: "Secretly has nine cats in his dorm room",},
    { no: 37, name: "Melvin Carroule", pos: "C", year: "Junior", ht: "6'1\"", wt: "0 lbs", hometown: "Scottsdale, AZ", school: "Saguaro HS", bt: "R/R", image: "images/37 Melvin Carroule.jpg",
        bioLink: '37_MelvinCarroule.html',
        major: "Interior design",
        food: "Grilled veggie bowls",
        interests: "Collecting plants, Twin Peaks (TV), Ex Machina (movie), Kid Cudi (music)",
        funfact: "Runs a popular YouTube account where he posts video essays about cryptids",},
    { no: 38, name: "Luke Pooser", pos: "LHP", year: "Sophomore", ht: "6'4\"", wt: "215 lbs", hometown: "Staten Island, NY", school: "Tottenville HS", bt: "L/L", image: "images/38 Luke Pooser.jpg",
        bioLink: '38_LukePooser.html',
        major: "Undeclared",
        food: "Orange chicken",
        interests: "Family Guy (TV), American Dad (TV), The Interview (movie), Kanye West (music)",
        funfact: "Kicked out of his first middle school for starting a fight club",},
    { no: 39, name: "Travis Desandro", pos: "1B", year: "Sophomore", ht: "5'11\"", wt: "190 lbs", hometown: "Oakland, CA", school: "Fremont HS", bt: "L/L", image: "images/39 Travis Desandro.jpg",
        bioLink: '39_TravisDesandro.html',
        major: "Photography",
        food: "Lucky Charms",
        interests: "South Park (TV), The Sandlot (movie), Rap (music), The Great Gatsby (book)",
        funfact: "Favorite cereal is Lucky Charms",},
    { no: 40, name: "Leighton D'Amato", pos: "INF", year: "Senior", ht: "6'0\"", wt: "210 lbs", hometown: "Austin, TX", school: "Lake Travis HS", bt: "L/L", image: "images/40 Leighton D'Amato.jpg",
        bioLink: '40_LeightonDAmato.html',
        major: "Art education",
        food: "Burgers",
        interests: "Psych (TV), Talladega Nights: The Ballad of Ricky Bobby (movie), Rihanna (music), To Kill a Mockingbird (book)",
        funfact: "Won't tell anyone his real age",},
    { no: 41, name: "Maina Dogsta", pos: "1B", year: "Senior", ht: "5'10\"", wt: "0 lbs", hometown: "Langley, BC", school: "Brookswood Secondary", bt: "L/L", image: "images/41 Maina Dogsta.jpg",
        bioLink: '41_MainaDogsta.html',
        major: "Creative writing",
        food: "Chicken quesadillas",
        interests: "Snowboarding, Outer Banks (TV), Pitch Perfect (movie), A Court of Thorns and Roses (book)",
        funfact: "Wants to try cyberbullying but knows it's wrong",},
    { no: 43, name: "Brent Tracer", pos: "RHP", year: "Senior", ht: "6'4\"", wt: "0 lbs", hometown: "Sydney, Australia", school: "Turramurra HS", bt: "R/R", image: "images/43 Brent Tracer.jpg",
        bioLink: '43_BrentTracer.html',
        major: "Animation",
        food: "Coconut curry",
        interests: "Surfing, rock climbing, The Other Guys (movie), EDM/electronic (music)",
        funfact: "Started a small microwave fire on the Steuben fourth floor",},
    { no: 44, name: "Donnisa Chilsick", pos: "LHP", year: "Junior", ht: "5'9\"", wt: "0 lbs", hometown: "Marietta, GA", school: "Walton HS", bt: "L/L", image: "images/44 Donnisa Chilsick.jpg",
        bioLink: '44_DonnisaChilsick.html',
        major: "Industrial design",
        food: "Sushi",
        interests: "Below Deck (TV), Romeo + Juliet (movie), Khalid (music), Come and Get It (book)",
        funfact: "Has an identical twin with whom she can communicate telepathically",},
    { no: 45, name: "Elmo Stich", pos: "INF", year: "Sophomore", ht: "6'0\"", wt: "0 lbs", hometown: "Waianae, HI", school: "Maryknoll HS", bt: "R/R", image: "images/45 Elmo Stich.jpg",
        bioLink: '45_ElmoStich.html',
        major: "Interior design",
        food: "Blooming onion",
        interests: "Yoga, Modern Family (TV), Sufjan Stevens (music), The Love Poems of Rumi (book)",
        funfact: "Keeps having encounters with ghosts but no one believes him",},
    { no: 47, name: "Reed Clonne", pos: "OF", year: "Sophomore", ht: "5'9\"", wt: "0 lbs", hometown: "Providence, KY", school: "Webster County HS", bt: "L/R", image: "images/47 Reed Clonne.jpg",
        bioLink: '47_ReedClonne.html',
        major: "Painting",
        food: "Chipotle",
        interests: "Thrifting, Bridgerton (TV), Pride & Prejudice (movie), Taylor Swift (music)",
        funfact: "Banned from every Applebee's location",},
    { no: 48, name: "Mony Coblas", pos: "RHP", year: "Junior", ht: "5'8\"", wt: "0 lbs", hometown: "Detroit, MI", school: "Central HS", bt: "R/R", image: "images/48 Mony Coblas.jpg",
        bioLink: '48_MonyCoblas.html',
        major: "Architecture",
        food: "Mediterranean",
        interests: "Going to museums, The Office (TV), Harry Potter and the Prisoner of Azkaban (movie), BTS (music)",
        funfact: "Still uses BeReal",},
    { no: 49, name: "Whres Eet", pos: "INF", year: "Junior", ht: "5'10\"", wt: "0 lbs", hometown: "Corpus Christi, TX", school: "Mary Carroll HS", bt: "L/R", image: "images/49 Whres Eet.jpg",
        bioLink: '49_WhresEet.html',
        major: "Game design",
        food: "Pizza",
        interests: "Elden Ring (game), Breath of the Wild (game), Arcane (TV), Tyler, The Creator (music)",
        funfact: "Throws right-handed but writes left-handed",},
    { no: 51, name: "Lanny Mandon", pos: "C", year: "Senior", ht: "5'9\"", wt: "0 lbs", hometown: "Los Angeles, CA", school: "Notre Dame HS", bt: "R/R", image: "images/51 Lanny Mandon.jpg",
        bioLink: '51_LannyMandon.html',
        major: "Interior design",
        food: "KBBQ",
        interests: "Better Call Saul (TV), Clueless (movie), Future (music), Win Forever (book)",
        funfact: "Snuck into the People's Choice Awards by being hot",},
    { no: 52, name: "Leona Rotor", pos: "RHP", year: "Freshman", ht: "5'11\"", wt: "0 lbs", hometown: "Memphis, TN", school: "Collierville HS", bt: "R/R", image: "images/52 Leona Rotor.jpg",
        bioLink: '52_LeonaRotor.html',
        major: "Fashion design",
        food: "Nerds gummy clusters",
        interests: "Tarot, Grey's Anatomy (TV), Money Heist (TV), The Seven Husbands of Evelyn Hugo (book)",
        funfact: "Is a skilled self-taught accordion player",},
    { no: 53, name: "Laren Pyton", pos: "UT", year: "Sophomore", ht: "5'8\"", wt: "0 lbs", hometown: "Rose Bud, AR", school: "Rose Bud HS", bt: "L/L", image: "images/53 Laren Pyton.jpg",
        bioLink: '53_LarenPyton.html',
        major: "Fine arts",
        food: "Chicken fettuccine alfredo",
        interests: "Ozark (TV), Ocean's Eleven (movie), Zach Bryan (music), The Hunger Games (book)",
        funfact: "Collects vintage typewriters",},
    { no: 54, name: "Cassio Farrane", pos: "RHP", year: "Junior", ht: "6'3\"", wt: "0 lbs", hometown: "Hartsville, SC", school: "Hartsville HS", bt: "R/R", image: "images/54 Cassio Farrane.jpg",
        bioLink: '54_CassioFarrane.html',
        major: "Graphic design",
        food: "Miso carbonara",
        interests: "Hard Knocks (TV), The Benchwarmers (movie), Luke Combs (music), The Alchemist (book)",
        funfact: "Trained a local crow to leave shiny objects on his windowsill",},
    { no: 55, name: "Nilo Socc", pos: "INF", year: "Senior", ht: "5'11\"", wt: "0 lbs", hometown: "Ballston Spa, NY", school: "Ballston Spa HS", bt: "R/R", image: "images/55 Nilo Socc.jpg",
        bioLink: '55_NiloSocc.html',
        major: "Architecture",
        food: "Pasta",
        interests: "How I Met Your Mother (TV), Step Brothers (movie), Drake (music), Moneyball (book)",
        funfact: "Loves Snoopy",},
    { no: 57, name: "Mavis Shen", pos: "OF", year: "Senior", ht: "5'9\"", wt: "0 lbs", hometown: "Aurora, IL", school: "Oswego East HS", bt: "L/L", image: "images/57 Mavis Shen.jpg",
        bioLink: '57_MavisShen.html',
        major: "Graphic design",
        food: "Steak tartare",
        interests: "Going to music festivals, Friday Night Lights (TV), To All the Boys I've Loved Before (movie), Dominic Fike (music)",
        funfact: "Is an amateur storm chaser",},
    { no: 60, name: "Warren Saint", pos: "INF", year: "Sophomore", ht: "6'5\"", wt: "0 lbs", hometown: "Oshkosh, WI", school: "Oshkosh North HS", bt: "R/R", image: "images/60 Warren Saint.jpg",
        bioLink: '60_WarrenSaint.html',
        major: "Industrial design",
        food: "Garlic bread",
        interests: "The Last Airbender (TV), The Matrix (movie), Björk (music), FKA Twigs (music)",
        funfact: "Completed a marathon despite not having trained for it",},
    { no: 62, name: "Reneck Mellet", pos: "RHP", year: "Senior", ht: "6'2\"", wt: "0 lbs", hometown: "Abbeville, LA", school: "Vermilion Catholic HS", bt: "R/R", image: "images/62 Reneck Mellet.jpg",
        bioLink: '62_ReneckMellet.html',
        major: "Industrial design",
        food: "Chick-Fil-A",
        interests: "Fishing, Duck Dynasty (TV), Good Will Hunting (movie), Macklemore (music)",
        funfact: "Once hiked 50 miles through the Bayou without a map, relying solely on instinct",},
    { no: 63, name: "Ebolda Huntin", pos: "INF", year: "Freshman", ht: "5'9\"", wt: "0 lbs", hometown: "Port St. Lucie, FL", school: "Treasure Coast HS", bt: "R/R", image: "images/63 Ebolda Huntin.jpg",
        bioLink: '63_EboldaHuntin.html',
        major: "Architecture",
        food: "Smoothie bowls",
        interests: "Going to the beach, Grey's Anatomy (TV), Tate McRae (music), The Stormlight Archive (book)",
        funfact: "Can speak three different languages",},
    { no: 66, name: "Dante Info", pos: "C", year: "Freshman", ht: "6'3\"", wt: "0 lbs", hometown: "West Palm Beach, FL", school: "Palm Beach Gardens HS", bt: "R/R", image: "images/66 Dante Info.jpg",
        bioLink: '66_DanteInfo.html',
        major: "Sculpture",
        food: "Loaded fries",
        interests: "Surfing, The Office (TV), Caddyshack (movie), Tame Impala (music)",
        funfact: "Is the drummer for Future Less Vivid, a band he started with his friends",},
    { no: 67, name: "Wren Pagon", pos: "INF", year: "Junior", ht: "5'9\"", wt: "0 lbs", hometown: "Cerritos, CA", school: "Gahr HS", bt: "L/R", image: "images/67 Wren Pagon.jpg",
        bioLink: '67_WrenPagon.html',
        major: "Industrial design",
        food: "McRib",
        interests: "Dirt biking, Brooklyn Nine-Nine (TV), Bad Bunny (music), The Outsiders (book)",
        funfact: "Was on an episode of Shark Tank",},
    { no: 69, name: "Cumnong Hamdic", pos: "INF", year: "Freshman", ht: "6'2\"", wt: "0 lbs", hometown: "Niceville, FL", school: "Niceville HS", bt: "L/L", image: "images/69 Cumnong Hamdic.jpg",
        bioLink: '69_CumnongHamdic.html',
        major: "Sculpture",
        food: "Takis",
        interests: "Golf, The Big Bang Theory (TV), Avengers Endgame (movie), Nickelback (music)",
        funfact: "Does the cinnamon challenge and is good at it",},
    { no: 71, name: "Luffin Grikintz", pos: "LHP", year: "Senior", ht: "6'1\"", wt: "0 lbs", hometown: "San Jose, CA", school: "Leland HS", bt: "L/L", image: "images/71 Luffin Grikintz.jpg",
        bioLink: '71_LuffinGrikintz.html',
        major: "Art history",
        food: "Foie gras",
        interests: "Chess, Zodiac (movie), Wagner (music), In Cold Blood (book)",
        funfact: "Is Griffin Kuntz' Wario",},
    { no: 75, name: "Lexy Adnhea", pos: "OF", year: "Sophomore", ht: "5'10\"", wt: "0 lbs", hometown: "San Antonio, TX", school: "Sandra Day O'Connor HS", bt: "R/R", image: "images/75 Lexy Adnhea.jpg",
        bioLink: '75_LexyAdnhea.html',
        major: "Photography",
        food: "Pollos Asados Los Nortenos",
        interests: "Brazilian jiu-jitsu, The Mandalorian (TV), She's the Man (movie), Drake (music)",
        funfact: "Wears mismatched socks during every game for good luck",},
    { no: 77, name: "Coin Klank", pos: "LHP", year: "Junior", ht: "6'2\"", wt: "0 lbs", hometown: "Reno, NV", school: "Reno HS", bt: "L/L", image: "images/77 Coin Klank.jpg",
        bioLink: '77_CoinKlank.html',
        major: "Graphic design",
        food: "Classic patty melt",
        interests: "Poker, The West Wing (TV), Seven (movie), Kygo (music)",
        funfact: "Legally changed his first name to Coin after becoming a crypto millionaire",},
    { no: 78, name: "Jolka Bot", pos: "RHP", year: "Sophomore", ht: "5'8\"", wt: "0 lbs", hometown: "Seoul, South Korea", school: "Kyunggi HS", bt: "R/R", image: "images/78 Jolka Bot.jpg",
        bioLink: '78_JolkaBot.html',
        major: "Illustration",
        food: "Chopped cheese",
        interests: "Dancing, Boys Over Flowers (TV), Barbie (movie), Stray Kids (music)",
        funfact: "Wears sunglasses in every postgame interview",},
    { no: 82, name: "Tucketh Norene", pos: "LHP", year: "Freshman", ht: "5'10\"", wt: "0 lbs", hometown: "Carmel, IN", school: "University HS", bt: "L/L", image: "images/82 Tucketh Norene.jpg",
        bioLink: '82_TuckethNorene.html',
        major: "Creative writing",
        food: "Chicken parmesan",
        interests: "Squid Game (TV), Parasite (movie), Kota the Friend (music), Leaves of Grass (book)",
        funfact: "Won a statewide poetry slam in high school",},
    { no: 84, name: "Blon Narkel", pos: "RHP", year: "Junior", ht: "5'11\"", wt: "0 lbs", hometown: "Hayward, CA", school: "Moreau Catholic HS", bt: "R/R", image: "images/84 Blon Narkel.jpg",
        bioLink: '84_BlonNarkel.html',
        major: "Fashion design",
        food: "Sweetgreen harvest bowl",
        interests: "Vanderpump Rules (TV), The Matrix (movie), Sabrina Carpenter (music), Chappell Roan (music)",
        funfact: "Had a Twitter feud with the host of Call Her Daddy",},
    { no: 88, name: "Nutpuck Minimick", pos: "RHP", year: "Sophomore", ht: "6'4\"", wt: "0 lbs", hometown: "Halifax, Nova Scotia", school: "Foothills Composite HS", bt: "R/R", image: "images/88 Nutpuck Minimick.jpg",
        bioLink: '88_NutpuckMinimick.html',
        major: "Cultural studies",
        food: "Redvines",
        interests: "Collecting seashells, reading philosophical texts, Beavis & Butthead (TV), Enya (music)",
        funfact: "Has had COVID six times",},
    { no: 92, name: "Rokie Sarnon", pos: "INF", year: "Junior", ht: "5'9\"", wt: "0 lbs", hometown: "Mission Viejo, CA", school: "Capistrano Valley HS", bt: "L/R", image: "images/92 Rokie Sarnon.jpg",
        bioLink: '92_RokieSarnon.html',
        major: "Architecture",
        food: "Hot pot",
        interests: "Suits (TV), The Conjuring (movie), SZA (music), Gone Girl (book)",
        funfact: "Can burp the alphabet",},
    { no: 99, name: "Yonk Ribell", pos: "OF", year: "Freshman", ht: "5'11\"", wt: "0 lbs", hometown: "Albuquerque, NM", school: "Sandia HS", bt: "L/R", image: "images/99 Yonk Ribell.jpg",
        bioLink: '99_YonkRibell.html',
        major: "Film",
        food: "Green chile breakfast burrito",
        interests: "Atlanta (TV), Mad Max: Fury Road (movie), Lil Baby (music), Comic (books)",
        funfact: "Was once interviewed on local TV for rescuing a turtle from a drainage pipe",},
];