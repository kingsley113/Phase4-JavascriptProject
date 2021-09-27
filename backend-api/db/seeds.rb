# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create Questions
question1 = Question.new 
question1.question = "When you gaze into the mirror, you see.."
question1.answer1 = "A towering giant."
question1.phrase1 = "A towering giant, taller than the greatest of forests, and misunderstood by many."
question1.answer2 = "A powerful sorcerer."
question1.phrase2 = "A powerful sorcerer, capable of harnessing the strongest magical forces at will."
question1.answer3 = "A strong fighter."
question1.phrase3 = "A legendary warrior, having never lost a fight. "
question1.answer4 = "A nimble elf."
question1.phrase4 = "A quick and nimble elf, dancing light on your feet to sneak and evade the trickiest foes."
question1.answer5 = "A wicked barbarian."
question1.phrase5 = "A barbarian who knows nothing but chaos and war, always eager for the next fight."
question1.answer6 = "A hearty orc."
question1.phrase6 = "A sturdy orc, capable of dealing deadly blows and deflecting massive amounts of damage."
question1.save

question2 = Question.new 
question2.question = "Who is always eager to…"
question2.answer1 = "Adventure to the edge of the world."
question2.phrase1 = "Willing to adventure to the ends of the earth, no adventure is to great or journey to difficult."
question2.answer2 = "Search the lands for valuable resources."
question2.phrase2 = "Endlessly searching the lands for valuable resources, to craft some of the finest items known to man."
question2.answer3 = "Explore the local countryside."
question2.phrase3 = "You gain great satisfaction from exploring your local town, meeting new people, trying new activities, and learning the rich history of the area."
question2.answer4 = "Roam the city streets at night."
question2.phrase4 = "You are the one who lurks in the shadows, roaming the dark city streets. Afraid of nobody, you wander night after night learning the secrets of the city."
question2.answer5 = "Discover new lands and adventures."
question2.phrase5 = "Exploring new lands brings you immense excitement. You are always eager to discover something new just outside of your comfort zone. "
question2.answer6 = "Venture into the darkest caves and dungeons."
question2.phrase6 = "Seeking adventure, you venture into the deepest, darkest caves and dungeons searching for riches, dominating whatever challenges face you along the way."
question2.save

question3 = Question.new 
question3.question = "Who believes in…"
question3.answer1 = "Striving for peace."
question3.phrase1 = "Nothing would make you happier than to see the world living in peace. Your primary goal in life is to do whatever it takes to see this through."
question3.answer2 = "War. War is the only option."
question3.phrase2 = "You want to conquer the world. The only way you can do this is endless war. Afraid of no enemy, you charge head first into battle, either you win or die."
question3.answer3 = "Ruling over the lands."
question3.phrase3 = "You aspire to be the greatest ruler of the lands. Your thirst for power is enough to drive an average man mad. It is up to you to decide in which way to use the power. "
question3.answer4 = "Living an honorable life."
question3.phrase4 = "Living a life full of honor is paramount. You will do anything within your power to make things right, pay your debts, and never unintentionally cross someone."
question3.answer5 = "Doing whatever it takes to meet a goal, good or bad."
question3.phrase5 = "You have a goal, and are not afraid to do whatever you need to achieve it. Even if this requires burning some bridges or taking advantage of others to get ahead."
question3.answer6 = "Selfless actions."
question3.phrase6 = "Driven by the feeling of joy when helping and taking care of others, you prioritize them over your own needs. Building a great reputation within the community. "
question3.save

question4 = Question.new 
question4.question = "Your greatest strength…"
question4.answer1 = "Cunning ingenuity to outsmart the greatest of enemy's."
question4.phrase1 = "In the heat of battle, you can maintain an unmatched level of calm, allowing you to develop the most cunning of tactics to outsmart and defeat the enemy."
question4.answer2 = "Strong enough to move mountains and wield the heaviest of weapons."
question4.phrase2 = "No creature has ever matched your strength or endurance. Capable of wielding the greatest of weapons with ease and effortlessly hauling huge amounts of gear for weeks on end."
question4.answer3 = "Kind heart, treating everyone with love and respect."
question4.phrase3 = "Your greatest strength lies in the kindness of your heart and compassion towards others. Not only with your fellow man, but the entire animal kingdom as well. This allows for many opportunities that others might not have."
question4.answer4 = "Your words can charm the toughest of crowds."
question4.phrase4 = "You have the ability to charm and bring laughter to the toughest of crowds. Manipulation and persuasion are trivial tasks to you and  minimal obstacles on your path."
question4.answer5 = "No problem is too complex for your mind."
question4.phrase5 = "Capable of crafting a catapult from a single spoon, no problem is too complex for you to solve. Each challenge is simply an opportunity to grow and apply all the wisdom learned over the years."
question4.answer6 = "Unbreakable integrity, always doing what is right."
question4.phrase6 = "You are one of the most trustworthy people in the land. Everyone greatly respects you and knows your integrity will prevail, allowing you to hear some interesting stories along the way. "
question4.save

question5 = Question.new 
question5.question = "…is plagued by a weakness of…"
question5.answer1 = "Addiction to fine ale & gambling."
question5.phrase1 = "Gambling away your last possessions, your health declining from excessive alcohol, you find yourself stuck nearly on the streets once again. Succumbing to your greatest vice."
question5.answer2 = "Overly skeptical of everyone."
question5.phrase2 = "You are weary of people, and believe that nobody can be trusted. This has led you to living a life full of doubt and had hampered many relationships in the past."
question5.answer3 = "Overlooking important details."
question5.phrase3 = "With your eagerness to move forward, faster, you often overlook important details on your journeys. This hampers your problem solving and navigation skills when exploring new lands."
question5.answer4 = "Uncontrollable anger."
question5.phrase4 = "You short temper often leads you into an uncontrollable blind rage. While in this state, you often make regrettable decisions that sometimes don’t even remember."
question5.answer5 = "Far too much trust in people."
question5.phrase5 = "Due to your caring nature, you instill too much trust in people. This opens the door for people to manipulate you to their advantage. While trust is valuable, too much can also stab you in the back."
question5.answer6 = "Cowardly habits in tough situations."
question5.phrase6 = "When fight or flight instinct kicks in, you are the first one to run away from a situation. While you may be able to fight another day, this hampers others image of you and their confidence in your leadership."
question5.save

question6 = Question.new 
question6.question = "Bound by…"
question6.answer1 = "Develop many long lasting friendships."
question6.phrase1 = "You have grown close with many lifelong friends, you love the companionship and joy of others. It is your goal to meet new people and continue to foster new relationships."
question6.answer2 = "Rediscovering a rich family heritage"
question6.phrase2 = "Growing up alone, you are determined to rediscover your long lost family tree, to learn who you are and where you came from."
question6.answer3 = "Living a life of solitude."
question6.phrase3 = "You have lived a lifetime of solitude and want to keep it that way. Preferring to do your own thing, whenever and however you want. You find it sometimes difficult to work with others."
question6.answer4 = "Dedicate your life to learning and expanding knowledge of the world."
question6.phrase4 = "You feel immense satisfaction from learning. Your goal in life is to pursuit the ever growing knowledge of the world, studying the past, and planning for your future."
question6.answer5 = "Lifelong nomadic traveler."
question6.phrase5 = "You prefer a nomadic life, forever travelling the lands. never living in one area for too long and settling in. The thought of staying in one location forever frightens you."
question6.answer6 = "Searching for long lost love."
question6.phrase6 = "In your younger days, you had a special connection with a partner. Now separated, you are determined to track down and find your one true love, no matter what it takes."
question6.save