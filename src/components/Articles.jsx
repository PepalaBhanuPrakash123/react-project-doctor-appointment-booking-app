import React, { useState } from "react";

// 30 unique article objects, you can edit titles, descriptions, tags, etc., as needed.
const articles = [
  {
    image: "https://www.practostatic.com/fit/97d4d0d041b8b808923ea9985405e7a657eeb00e",
    title: "FAQs of Sciatica!",
    author: "Dr.Vinay Virmal(PT), Physiotherapist",
    description: "What is meant by sciatica? Sciatica means pain originating from the back and radiating down to the lower limbs. This pain ...",
    tags: ["Back Pain", "Neck Pain"],
    likes: 12,
  },
  {
    image: "https://www.colgate.com/content/dam/cloud/cp-sites/oral-care/oral-care-center/en-in/occ/basics/brushing-and-flossing/how-long-should-you-brush-your-teeth-for.jpg",
    title: "How to Brush Your Teeth Correctly?",
    author: "Dr.Abhilav Maurya, Dentist",
    description: "Brushing teeth is not just for getting it whitened or having fresh breath but it’s for overall health also. Here ...",
    tags: ["Oral Hygiene", "Dental Care", "Tooth Decay", "Dental Caries"],
    likes: 7,
  },
  {
    image: "https://i.etsystatic.com/14621444/r/il/aecc8d/3389552776/il_570xN.3389552776_foed.jpg",
    title: "30 Power Moves with just a Yoga Mat",
    author: "Refinery29.com",
    description: "Armed with just a yoga mat and some determination, here are 30 powerful fitness moves you can do without even stepping out of your room! Most of these focus on the chest and the core, while plenty act on muscles of the arms and legs.",
    tags: ["Yoga", "Fitness"],
    likes: 216,
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Wish to turn back time on your scars? Microneedling is the answer you need",
    author: "Women's Health",
    description: "As scary as needles can be, a few pokes can actually help you look more beautiful. Microneedling, a new technique that involves treatment with several tiny needles creating micro-injuries on your scars, can turn back time on your acne scars and stretch marks.",
    tags: ["Skin Care", "Scars"],
    likes: 117,
  },
  {
    image: "https://ifoodreal.com/wp-content/uploads/2014/12/FG-how-to-make-lemon-water.jpg",
    title: "Benefit's of Drinking Lemon Water",
    author: "Dr.Raviji Francis(PT), Physiotherapist",
    description: "Indians have huge vitamin deficiency figures compared to Global standards. Various food myths are to be blamed for this. As a clinical ...",
    tags: ["Diet", "Kidney Stone Disease","Vitamins & Suplements"],
    likes: 16,
  },
  {
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Managing Mental Health in Times of Demonetization",
    author: "Dr.Sugandha Gupta, Psychiatrist",
    description: "Demonetization news has taken everyone by surprise leading to sleepless nights, fretful days, panic and anxiety. Needless to say, it’s ...",
    tags: ["Mental Health"],
    likes: 7,
  },
  {
    image: "https://ckbirlahospitals.com/_next/image?url=https%3A%2F%2Fckbh.ckbirlahospitals.com%2Fstorage%2Fcmri%2Fuploadedfiles%2Fgallery%2F1727240401_Burning%20Sensation%20During%20Urination%20copy%5B1%5D.webp&w=3840&q=75",
    title: "Symptoms and Causes of Burning Urination (Dysuria)",
    author: "Dr.Dilip Raja, Urologist",
    description: "Symptoms - Burning urination or painful urination is also referred to as dysuria. A burning sensation with urination can be ...",
    tags: ["Urinary System", "Urinary Tract Infection"],
    likes: 6,
  },
  {
    image: "https://assets.lybrate.com/q_auto,f_auto,w_1200/eagle/uploads/6e67eaf22dedfbabc6fa671cd0584385/506f47.jpg",
    title: "How Marriage Counselling Solved Temperamental Issues?",
    author: "Dr.Nikha Khanna(PhD), Psychologist",
    description: "This is a case wherein a school counselor for children referred parents to visit us. Navya (13) used to be ...",
    tags: ["Anger Management", "Stress Management"],
    likes: 13,
  },
  {
    image: "https://www.practostatic.com/fit/8e310c6ec1fabd40eee36280235879b4f6cbf023",
    title: "Do You Know Why Animals Never Get Cavities?",
    author: "Dr.Shreesh Padiv, Dentist",
    description: "Ever wondered that in spite of all the dental care we receive throughout our lives, it’s still possible to end ...",
    tags: ["Digestive System", "Dental Care"],
    likes: 28,
  },
  {
    image: "https://cdn-images.ausmed.com/ausmed-articles/20191127_cover_v2.1.jpg",
    title: "OCD (Obsessive Compulsive Disorder): 5 Facts You Need to Know",
    author: "Dr.Sweekant Bansal, Psychologist",
    description: "Out of any group of 1000 Indians, OCD is seen in around 20. It usually consists of repeated, troublesome thoughts (obsessions).",
    tags: ["Psychiatry", "Anxiety", "Sexual Well-Being"],
    likes: 9,
  },
  {
    image: "https://img.etimg.com/thumb/msid-94177785,width-480,height-360,imgsize-479108,resizemode-75/core-strengthening-exercises.jpg",
    title: "Know Your Back Pain - Know Your Back Muscles",
    author: "Dr.Viksha Virmal(PT), Physiotherapist",
    description: "KNOW YOUR BACK PAIN : KNOW YOUR BACK MUSCLES The latissimus dorsi (“latissimus meaning ‘broadest’”) are the large fan-shaped muscles ...",
    tags: ["Muscles Of The Torso", "Digestive System", "Back Pain", "Shoulder Pain"],
    likes: 6,
  },
  {
    image: "https://medicircle.in/uploads/2022/august2022/how-to-start-meal-planning.jpg",
    title: "Customizing Your Meal Plan",
    author: "Dr.Viksha Virmal(PT), Physiotherapist",
    description: "Customizing Your Meal Plan Although MyPyramid, the Vegetarian Food Guide Pyramid, and the food plate model each contain important ideas to vegetarian athletes ...",
    tags: ["Diet", "Vegetarian Diet", "Healthy Eating"],
    likes: 7,
  },
  // 18 more cards, fill in as needed for your use case with different images, titles, etc.
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    title: "Is It Normal to Shed This Much?",
    author: "greatist.com",
    description: "Losing hair can be quite scary. While it's normal to shed 50-100 hair a day, losing more could mean something's wrong. First off, you must stay calm—stressing over hair loss can lead to more of it (haha! Bodies.)",
    tags: ["Hair Health"],
    likes: 122,
  },
  {
    image: "https://ifoodreal.com/wp-content/uploads/2014/12/FG-how-to-make-lemon-water.jpg",
    title: "Benefits of Drinking Lemon Water",
    author: "Dietitian Swetha Chaturvedi",
    description: "Lemon water is refreshing and healthy! Here are its top benefits, plus tips for making it part of your daily routine.",
    tags: ["Vitamins & Supplements", "Drinking Habits"],
    likes: 28,
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Pro Tips for Treating Male Pattern Baldness",
    author: "Dr. Sandeep Kumar, Dermatologist",
    description: "Regain confidence by understanding effective treatments for male pattern baldness, from medications to advanced therapies.",
    tags: ["Hair Loss", "Baldness"],
    likes: 19,
  },
  {
    image: "https://i.etsystatic.com/14621444/r/il/aecc8d/3389552776/il_570xN.3389552776_foed.jpg",
    title: "30 Power Yoga Moves at Home",
    author: "Refinery29.com",
    description: "No equipment? No problem! These 30 yoga mat moves will help you build strength and flexibility from the comfort of your home.",
    tags: ["Yoga", "Home Workout"],
    likes: 92,
  },
  {
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=400&q=80",
    title: "Marriage Counselling: How It Helps Families",
    author: "Ritu Khandelwal, Psychologist",
    description: "Marriage counseling can be a transformative experience. Read how it helps couples resolve conflicts and build stronger bonds.",
    tags: ["Marriage", "Stress Management"],
    likes: 14,
  },
  {
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Computer Eye Strain: Causes and Prevention",
    author: "Dr. Pallavee R Goswami, Ophthalmologist",
    description: "Computer and other electronic gadgets are nowadays a part and parcel of life. Although there are many advantages, still there ...",
    tags: ["Eye Care", "Syndromes", "Dryness"],
    likes: 10,
  },
  {
    image: "https://webflow-amber-prod.gumlet.io/620e4101b2ce12a1a6bff0e8/63bc1fffef375305987d272a_Tips%20for%20Stress%20Management%20for%20Students.webp",
    title: "Managing Stress for Better Health",
    author: "Dr. Prashant Ojha, Dentist",
    description: "We all come across stress in our lives. Our mouths have just as much of a chance of being affected ...",
    tags: ["Dental Care", "Stress"],
    likes: 26,
  },
  {
    image: "https://www.shutterstock.com/image-photo/dental-hygiene-oral-health-care-600nw-2523738153.jpg",
    title: "Why You Should Not Ignore Dental Care",
    author: "Dr. Nidhi Rana, Dentist",
    description: "Explore why most animals have perfect teeth—and what humans can learn from their natural dental care habits.",
    tags: ["Dental Care", "Special Features"],
    likes: 22,
  },
  {
    image: "https://www.sleepfoundation.org/wp-content/uploads/2018/10/What-is-Healthy-Sleep.jpg",
    title: "The Science of Good Sleep",
    author: "HealthLine.com",
    description: "Experts recommend 7 hours of sleep for optimal health and productivity. Sleep is important for not just the mind- memory and concentration- it is a must for good heart health too.",
    tags: ["Sleep", "Rest"],
    likes: 170,
  },
  {
    image: "https://www.theblackberrycenter.com/wp-content/uploads/Anxiety-Disorders-scaled.webp",
    title: "Understanding and Managing Anxiety",
    author: "Dr. Ritu Mathur, Psychologist",
    description: "Gain a clear understanding of anxiety, its symptoms, and how to seek help for yourself or someone you know.",
    tags: ["Mental Health", "Anxiety"],
    likes: 11,
  },
  {
    image: "https://images.theconversation.com/files/467770/original/file-20220608-26-46z6ku.jpg?ixlib=rb-4.1.0&rect=0%2C8%2C5991%2C3979&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    title: "Building Immunity Against Infections",
    author: "Dr. Diana Borgio",
    description: "Health articles that keep you informed about good health practices and achieve your goals.",
    tags: ["Immunity", "Vitamins"],
    likes: 80,
  },
  {
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=400&q=80",
    title: "Asthma: Steps to Breathe Easy",
    author: "Dr. Sameer Gupta, Pulmonologist",
    description: "Control asthma with 5 proven steps, including breathing exercises, avoiding triggers, and proper medication use.",
    tags: ["Asthma", "Breathing"],
    likes: 14,
  },
  {
    image: "https://cdn.prod.website-files.com/64c196f6a5062cbed770a366/64fcd5d3e1c4738871fb2ce7_92%20Teenage%20Drug%20Abuse%20Statistics%2C%20Facts%20%26%20Prevalence%20-Cover-100.jpg",
    title: "Drug Abuse in Teens: Shocking Facts",
    author: "Dr. Aman Tiwari, Psychiatrist",
    description: "Learn about the risks and prevention of drug abuse among teenagers, and how to support mental well-being.",
    tags: ["Drug Abuse", "Teens", "Prevention"],
    likes: 15,
  },
  {
    image: "https://novusacs.com/wp-content/uploads/2023/03/iStock-1352713872-1-1.jpg",
    title: "Weight Loss for People With HIV",
    author: "Dr. Karan Jain, Nutritionist",
    description: "Special guidance for healthy weight loss and nutrition management in people living with HIV.",
    tags: ["Weight Loss", "HIV", "Nutrition"],
    likes: 9,
  },
  {
    image: "https://lh3.googleusercontent.com/proxy/kqWECk_w1A2OzRvpBJb7qEmSPPQTGd3fK4D3o1y7HlZzjbpw5D7ElA2zB87v4HdZDiuAtAKLusLIvaOMNPvuuT-IZiAV8PHkLFU-CKqzD5KZnYvNG7L1YEHtIMY4Jw",
    title: "Unexpected Asthma Triggers",
    author: "Dr. Meera Menon, Pulmonologist",
    description: "Discover some surprising triggers for asthma attacks and how to manage them effectively.",
    tags: ["Asthma", "Triggers"],
    likes: 13,
  },
  {
    image: "https://samitivej-prod-new-website.s3.ap-southeast-1.amazonaws.com/public/uploads/contents/8e74834870ba3b9859fa890cf21a83bc.jpg",
    title: "Expert Tips to Treat Insomnia",
    author: "Dr. Swati Agarwal, Sleep Specialist",
    description: "Get expert advice on overcoming insomnia and improving your sleep schedule.",
    tags: ["Insomnia", "Sleep"],
    likes: 19,
  },
  {
    image: "https://cdn.shopify.com/s/files/1/1980/1825/files/uptown-tea-shop-chamomile-tea-cup-93193226-2500.jpg?v=1627569674",
    title: "Health Benefits of Chamomile Tea",
    author: "Ms. Khyati Rupani, Dietitian/Nutritionist",
    description: "Chamomile is one of the most well-known herbs with medicinal properties. It has been used for centuries for its beneficial ...",
    tags: ["Diet", "Insomnia", "Flower Tea", "Healthy Eating", "Healthy Digestion", "Healthy Skin"],
    likes: 9,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "The Truth About Sugar",
    author: "Dr. Sandeep Roy, Endocrinologist",
    description: "Understand how sugar affects your body and how to moderate your intake for better health.",
    tags: ["Sugar", "Endocrinology"],
    likes: 21,
  },
];

function ArticleCard({ article }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 10,
      boxShadow: "0 2px 8px 0 rgba(0,0,0,0.06)",
      padding: 18,
      marginBottom: 24,
      minWidth: 280,
      maxWidth: 340,
      flex: "1 1 320px",
      display: "flex",
      flexDirection: "column"
    }}>
      <img
        src={article.image}
        alt={article.title}
        style={{
          width: "100%",
          height: 130,
          objectFit: "cover",
          borderRadius: 8,
          marginBottom: 16
        }}
      />
      <div style={{fontWeight: 700, fontSize: 18, marginBottom: 6}}>{article.title}</div>
      <div style={{color: "#1976d2", fontWeight: 500, fontSize: 15, marginBottom: 6}}>{article.author}</div>
      <div style={{color: "#444", fontSize: 15, marginBottom: 8, minHeight: 48}}>{article.description}</div>
      <div style={{marginBottom: 8}}>
        {article.tags.map((tag, idx) => (
          <span key={idx} style={{
            display: "inline-block",
            background: "#f0f4f8",
            color: "#555",
            borderRadius: 6,
            padding: "2px 12px",
            marginRight: 5,
            fontSize: 13,
            marginBottom: 3,
          }}>
            {tag}
          </span>
        ))}
      </div>
      <div style={{display: "flex", alignItems: "center", color: "#888", fontSize: 15, marginTop: "auto"}}>
        <span style={{marginRight: 10}}>♡</span>{article.likes}
        <span style={{marginLeft: 16, cursor: "pointer"}}>↗</span>
      </div>
    </div>
  );
}

export default function Articles() {
  const [visibleCount, setVisibleCount] = useState(15);
  const visibleArticles = articles.slice(0, visibleCount);

  return (
    <div style={{
      background: "#f4f6fa",
      minHeight: "100vh",
      width: "100vw",
      padding: "0 0 40px 0"
    }}>
      <div style={{
        maxWidth: 1080,
        margin: "0 auto",
        padding: "36px 0"
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: 28,
          letterSpacing: "-0.3px"
        }}>
          Top health articles
        </h2>
        <p style={{
          textAlign: "center",
          marginBottom: 30,
          color: "#555"
        }}>
          Trending tips from doctors and health experts
        </p>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          justifyContent: "flex-start"
        }}>
          {visibleArticles.map((article, idx) => (
            <ArticleCard key={idx} article={article} />
          ))}
        </div>
        {visibleCount < articles.length && (
          <div style={{textAlign: "center", marginTop: 32}}>
            <button
              onClick={() => setVisibleCount(articles.length)}
              style={{
                background: "#1976d2",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                padding: "12px 42px",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 1px 4px 0 rgba(25,118,210,0.14)",
                transition: "background 0.2s"
              }}
            >
              Load More
            </button>
          </div>
        )}
      </div>
      
    </div>
  );
}