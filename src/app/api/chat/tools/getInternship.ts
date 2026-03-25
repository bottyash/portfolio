import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of internship I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my internship search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s what I’m looking for 👇

- 📅 **Availability**: Open to immediate opportunities
- 🌍 **Location**: Preferably **Gurugram** or anywhere in the **India**
- 🧑‍💻 **Focus**: Data Science, AI/ML, Full-stack development
- 🛠️ **Stack**: Python, React, SQL, TensorFlow, Power BI, Tableau
- ✅ **What I bring**: Experience in building data-driven dashboards, optimizing data pipelines, and developing end-to-end analytics projects. Proven ability to translate raw data into actionable business insights.
- 🔥 I move fast, learn faster, and I’m HUNGRYYYYY for big challenges

📬 **Contact me** via:
- Email: officialparmaryash@gmail.com
- LinkedIn: [linkedin.com/in/yash-parmar-5a3222221](https://linkedin.com/in/yash-parmar-5a3222221)
- GitHub: [github.com/bottyash](https://github.com/bottyash)

Let's build cool shit together ✌️
    `;
  },
});
