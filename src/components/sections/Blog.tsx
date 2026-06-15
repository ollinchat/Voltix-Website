import { motion } from 'framer-motion';
import { useI18n } from '../../i18n';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';
import { SectionHeading } from '../ui/SectionHeading';

export function Blog() {
  const { t } = useI18n();

  return (
    <section id="blog" className="relative section-padding section-alt">
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      <div className="relative mx-auto max-w-[1600px]">
        <SectionHeading label={t.blog.label} title={t.blog.title} subtitle={t.blog.subtitle} />

        <div className="grid gap-6 lg:grid-cols-3">
          {t.blog.posts.map((post, i) => (
            <AnimateOnScroll key={post.title} delay={i * 0.1}>
              <article className="group flex h-full cursor-pointer flex-col border border-voltix-200 bg-white shadow-panel transition-shadow hover:shadow-card">
                <div className="relative h-36 overflow-hidden border-b border-voltix-200 bg-voltix-50">
                  <div className="absolute inset-0 blueprint-grid opacity-80" />
                  <div className="absolute bottom-4 start-4 end-4 flex items-end justify-between">
                    <span className="font-mono text-[10px] text-voltix-500">{post.date}</span>
                    <span className="border border-voltix-600 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-voltix-600">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-3 start-3 h-4 w-4 border-s border-t border-voltix-400/50" />
                  <div className="absolute top-3 end-3 h-4 w-4 border-e border-t border-voltix-400/50" />
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <h3 className="mb-4 flex-1 text-base font-bold leading-snug text-voltix-900 transition-colors group-hover:text-voltix-600 md:text-lg">
                    {post.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-voltix-500">{post.excerpt}</p>
                  <div className="flex items-center justify-between border-t border-voltix-200 pt-4">
                    <span className="font-mono text-[9px] text-voltix-400">{post.readTime}</span>
                    <motion.span
                      className="font-mono text-[10px] uppercase tracking-widest text-voltix-600"
                      whileHover={{ x: 4 }}
                    >
                      {t.blog.readMore} →
                    </motion.span>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
