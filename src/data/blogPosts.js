export const blogPosts = {
  en: [
    {
      id: 1,
      title: "Essential Mineral Supplements for Dairy Cattle Health",
      slug: "essential-minerals-dairy-cattle",
      excerpt: "Learn about the crucial minerals needed for optimal dairy cattle health and production. Discover how proper supplementation can improve milk yield and reproductive performance.",
      image: "/assets/images/blog/dairy-cattle-health.jpg",
      category: "Cattle Health",
      date: "2024-03-15",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Understanding Calcium Requirements in Livestock",
      slug: "calcium-requirements-livestock",
      excerpt: "A comprehensive guide to calcium supplementation in livestock. Find out why calcium is crucial for bone health, milk production, and overall animal wellness.",
      image: "/assets/images/blog/calcium-supplements.jpg",
      category: "Nutrition",
      date: "2024-03-10",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Best Practices for Animal Feed Supplementation",
      slug: "feed-supplementation-guide",
      excerpt: "Expert tips on implementing an effective feed supplementation program. Learn how to maximize the benefits of mineral mixtures and supplements.",
      image: "/assets/images/blog/feed-supplements.jpg",
      category: "Best Practices",
      date: "2024-03-05",
      readTime: "6 min read"
    }
  ],
  hi: [
    {
      id: 1,
      title: "डेयरी पशुओं के स्वास्थ्य के लिए आवश्यक खनिज पूरक",
      slug: "dairy-pashu-khanij-purak",
      excerpt: "डेयरी पशुओं के स्वास्थ्य और उत्पादन के लिए आवश्यक खनिजों के बारे में जानें। जानें कैसे उचित पूरक दूध उत्पादन और प्रजनन क्षमता में सुधार कर सकते हैं।",
      image: "/assets/images/blog/dairy-cattle-health.jpg",
      category: "पशु स्वास्थ्य",
      date: "15 मार्च 2024",
      readTime: "5 मिनट का पाठ"
    },
    {
      id: 2,
      title: "पशुओं में कैल्शियम की आवश्यकता को समझें",
      slug: "pashu-calcium-avashyakta",
      excerpt: "पशुओं में कैल्शियम पूरक के बारे में एक व्यापक गाइड। जानें कि हड्डियों के स्वास्थ्य, दूध उत्पादन और समग्र पशु कल्याण के लिए कैल्शियम क्यों महत्वपूर्ण है।",
      image: "/assets/images/blog/calcium-supplements.jpg",
      category: "पोषण",
      date: "10 मार्च 2024",
      readTime: "7 मिनट का पाठ"
    },
    {
      id: 3,
      title: "पशु आहार पूरक के लिए सर्वोत्तम प्रथाएं",
      slug: "pashu-aahar-purak-guide",
      excerpt: "प्रभावी आहार पूरक कार्यक्रम को लागू करने के लिए विशेषज्ञ टिप्स। खनिज मिश्रण और पूरक के लाभों को अधिकतम करना सीखें।",
      image: "/assets/images/blog/feed-supplements.jpg",
      category: "सर्वोत्तम प्रथाएं",
      date: "5 मार्च 2024",
      readTime: "6 मिनट का पाठ"
    }
  ]
};

export const blogPostContent = {
  en: {
    "essential-minerals-dairy-cattle": {
      title: "Essential Mineral Supplements for Dairy Cattle Health",
      content: `
        <h2>Why Minerals Matter for Dairy Cattle</h2>
        <p>Minerals play a crucial role in maintaining optimal health and productivity in dairy cattle. From calcium for milk production to trace minerals for immune function, proper supplementation is essential.</p>

        <h2>Key Minerals for Dairy Cattle</h2>
        <ul>
          <li><strong>Calcium:</strong> Essential for milk production and bone health</li>
          <li><strong>Phosphorus:</strong> Important for energy metabolism</li>
          <li><strong>Magnesium:</strong> Crucial for nerve function and milk production</li>
          <li><strong>Zinc:</strong> Supports immune function and hoof health</li>
        </ul>

        <h2>Implementing a Mineral Supplementation Program</h2>
        <p>A successful mineral supplementation program requires careful planning and monitoring. Consider these factors:</p>
        <ol>
          <li>Age and production stage of the animals</li>
          <li>Current feed quality and mineral content</li>
          <li>Environmental conditions</li>
          <li>Water quality and mineral content</li>
        </ol>
      `,
      category: "Cattle Health",
      date: "2024-03-15",
      readTime: "5 min read",
      author: "Dr. Sharma",
      authorTitle: "Veterinary Nutritionist"
    },
    "calcium-requirements-livestock": {
      title: "Understanding Calcium Requirements in Livestock",
      content: `
        <h2>The Importance of Calcium in Animal Health</h2>
        <p>Calcium is a fundamental mineral for livestock health, playing vital roles in bone development, muscle function, and milk production. Understanding proper calcium supplementation is crucial for optimal animal performance.</p>

        <h2>Key Benefits of Calcium</h2>
        <ul>
          <li><strong>Bone Health:</strong> Essential for skeletal development and maintenance</li>
          <li><strong>Milk Production:</strong> Critical for lactating animals</li>
          <li><strong>Muscle Function:</strong> Necessary for proper muscle contraction</li>
          <li><strong>Blood Clotting:</strong> Important for wound healing</li>
        </ul>

        <h2>Calcium Requirements by Life Stage</h2>
        <p>Different life stages require varying levels of calcium supplementation:</p>
        <ol>
          <li>Growing Animals: Higher requirements for bone development</li>
          <li>Pregnant Animals: Increased needs for fetal development</li>
          <li>Lactating Animals: Maximum requirement for milk production</li>
          <li>Adult Maintenance: Lower but consistent requirements</li>
        </ol>
      `,
      category: "Nutrition",
      date: "2024-03-10",
      readTime: "7 min read",
      author: "Dr. Patel",
      authorTitle: "Animal Nutrition Specialist"
    },
    "feed-supplementation-guide": {
      title: "Best Practices for Animal Feed Supplementation",
      content: `
        <h2>Optimizing Feed Supplementation</h2>
        <p>Proper feed supplementation is crucial for maintaining optimal health and productivity in livestock. This guide covers essential practices for effective supplementation programs.</p>

        <h2>Key Principles of Feed Supplementation</h2>
        <ul>
          <li><strong>Timing:</strong> When to supplement for maximum benefit</li>
          <li><strong>Quantity:</strong> Determining the right amount</li>
          <li><strong>Quality:</strong> Choosing the right supplements</li>
          <li><strong>Monitoring:</strong> Tracking effectiveness</li>
        </ul>

        <h2>Implementation Steps</h2>
        <ol>
          <li>Assess current feed quality</li>
          <li>Identify nutritional gaps</li>
          <li>Select appropriate supplements</li>
          <li>Monitor animal response</li>
          <li>Adjust as needed</li>
        </ol>
      `,
      category: "Best Practices",
      date: "2024-03-05",
      readTime: "6 min read",
      author: "Dr. Singh",
      authorTitle: "Livestock Management Expert"
    }
  },
  hi: {
    "dairy-pashu-khanij-purak": {
      title: "डेयरी पशुओं के स्वास्थ्य के लिए आवश्यक खनिज पूरक",
      content: `
        <h2>डेयरी पशुओं के लिए खनिज क्यों महत्वपूर्ण हैं</h2>
        <p>खनिज डेयरी पशुओं के स्वास्थ्य और उत्पादकता को बनाए रखने में महत्वपूर्ण भूमिका निभाते हैं। दूध उत्पादन के लिए कैल्शियम से लेकर प्रतिरक्षा प्रणाली के लिए ट्रेस मिनरल्स तक, उचित पूरक आवश्यक है।</p>

        <h2>डेयरी पशुओं के लिए प्रमुख खनिज</h2>
        <ul>
          <li><strong>कैल्शियम:</strong> दूध उत्पादन और हड्डियों के स्वास्थ्य के लिए आवश्यक</li>
          <li><strong>फॉस्फोरस:</strong> ऊर्जा चयापचय के लिए महत्वपूर्ण</li>
          <li><strong>मैग्नीशियम:</strong> तंत्रिका कार्य और दूध उत्पादन के लिए महत्वपूर्ण</li>
          <li><strong>जिंक:</strong> प्रतिरक्षा प्रणाली और खुर स्वास्थ्य का समर्थन करता है</li>
        </ul>

        <h2>खनिज पूरक कार्यक्रम को लागू करना</h2>
        <p>एक सफल खनिज पूरक कार्यक्रम के लिए सावधानीपूर्वक योजना और निगरानी की आवश्यकता होती है। इन कारकों पर विचार करें:</p>
        <ol>
          <li>पशुओं की आयु और उत्पादन अवस्था</li>
          <li>वर्तमान चारा गुणवत्ता और खनिज सामग्री</li>
          <li>पर्यावरणीय परिस्थितियां</li>
          <li>पानी की गुणवत्ता और खनिज सामग्री</li>
        </ol>
      `,
      category: "पशु स्वास्थ्य",
      date: "15 मार्च 2024",
      readTime: "5 मिनट का पाठ",
      author: "डॉ. शर्मा",
      authorTitle: "पशु पोषण विशेषज्ञ"
    }
  }
}; 