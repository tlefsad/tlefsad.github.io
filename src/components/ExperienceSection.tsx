import { workExperience } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-16 bg-gradient-to-b from-muted/20 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">

        {/* Section Title – Clean, No Icon */}
        <MotionWrapper>
          <h2 className="text-3xl font-bold mb-10 text-center md:text-left">
            Work Experience
          </h2>
        </MotionWrapper>

        {/* Timeline */}
        <div className="space-y-8 relative">
          {workExperience.map((job, index) => (
            <TimelineItem
              key={job.company + job.period}
              title={`${job.position} | ${job.company}`}
              subtitle={`${job.location} ${(() => {
                const countryMap: Record<string, string> = {
                  "United Arab Emirates": "AE",
                  Thailand: "TH",
                  "Hong Kong": "HK",
                };
                const country = job.location.split(", ").pop()!;
                const code = countryMap[country];
                return code
                  ? code.replace(/./g, (c) =>
                      String.fromCodePoint(127397 + c.charCodeAt(0))
                    )
                  : "";
              })()}`}
              date={job.period}
              isLast={index === workExperience.length - 1}
              index={index}
            >
              {/* Experience Card */}
              <motion.div
                className="mt-4 p-5 rounded-xl border backdrop-blur-md bg-background/70 dark:bg-card/10
                border-purple-500/10 hover:border-purple-500/30 shadow-sm hover:shadow-purple-500/10 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }}
              >
                {/* Achievements Label */}
                <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full
                  bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20">
                  <span className="text-xs font-medium text-foreground/80">
                    Achievements
                  </span>
                </div>

                {/* Achievements List */}
                <ul className="space-y-2 text-sm">
                  {job.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="relative pl-6 text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-purple-400/70 shadow-sm"></span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
