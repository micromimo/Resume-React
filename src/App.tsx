import { ReactNode } from 'react';
import { GraduationCap, Briefcase, Trophy, Code, Sparkles, User } from 'lucide-react';
import { cn } from './lib/utils';
import { resumeData } from './data/resumeData';

/**
 * 简历页面组件
 * ------------------------------------------------------------
 * 要自定义简历内容，请编辑 src/data/resumeData.ts
 * 本组件会自动根据数据文件渲染所有区块，无需改动。
 */

const SectionHeader = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="flex items-center gap-2 mb-1.5 border-b border-brand/20 pb-0.5">
    <div className="text-brand-dark">
      <Icon size={14} />
    </div>
    <h2 className="text-[13px] font-bold text-slate-800 tracking-tight uppercase">{title}</h2>
  </div>
);

const GlassContainer = ({ children, className }: { children: ReactNode, className?: string }) => (
  <div className={cn(
    "bg-white/40 backdrop-blur-md border border-brand-light/40 rounded-xl py-3 px-4 shadow-[0_0_32px_-4px_rgba(167,139,250,0.12),0_14px_36px_-10px_rgba(0,0,0,0.22),inset_0_-6px_14px_-4px_rgba(0,0,0,0.18)]",
    className
  )}>
    {children}
  </div>
);

export default function App() {
  const { header, education, experience, projects, awards, skills } = resumeData;

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans print:p-0 print:bg-white">
      <style dangerouslySetInnerHTML={{ __html: `
        @media screen {
          .resume-container {
            width: 210mm;
            height: 297mm;
            max-width: 100%;
          }
        }
        @media print {
          @page { size: A4; margin: 0; }
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          .resume-container { 
            width: 210mm !important; 
            height: 297mm !important; 
            margin: 0 !important;
            padding: 8mm 12mm !important;
          }
        }
      `}} />
      
      {/* Main Resume Page */}
      <div className="resume-container relative bg-white shadow-[0_0_60px_-8px_rgba(167,139,250,0.10),0_20px_60px_-12px_rgba(0,0,0,0.25)] flex flex-col px-[12mm] py-[8mm] overflow-hidden border-t-[6px] border-brand shrink-0">
        
        {/* Header Section: [Photo][Name] Left, [Info] Right */}
        <header className="flex justify-between items-end mb-1.5 pb-1.5 border-b border-slate-100 shrink-0">
          <div className="flex items-end gap-5">
            <div className="w-20 h-20 rounded-lg overflow-hidden border border-slate-200 shrink-0 shadow-sm bg-slate-100 flex items-center justify-center">
              {header.photo ? (
                <img 
                  src={header.photo} 
                  alt={header.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <User size={32} className="text-slate-300" />
              )}
            </div>
            <div className="flex flex-col pb-1">
              <h1 className="text-3xl font-bold text-slate-900 leading-tight">{header.name}</h1>
              <span className="text-brand-dark font-bold text-[11px] tracking-[0.2em] uppercase">{header.englishName}</span>
            </div>
          </div>

          <div className="text-right space-y-1.5 text-[12px] text-slate-600 font-medium pb-1">
            <div className="flex items-center justify-end gap-2">
              <span className="text-slate-400">邮箱:</span>
              <span className="text-slate-800">{header.email}</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <span className="text-slate-400">电话:</span>
              <span className="text-slate-800">{header.phone}</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <span className="text-slate-400">专业:</span>
              <span className="text-slate-800">{header.major}</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <span className="text-slate-400">求职岗位:</span>
              <span className="text-brand-dark font-bold">{header.position}</span>
            </div>
          </div>
        </header>

        {/* Content Body - Balanced Spacing */}
        <div className="flex-1 flex flex-col justify-start space-y-2">
          
          {/* Education */}
          {education.length > 0 && (
            <GlassContainer className="py-2 px-4 shadow-sm">
              <SectionHeader icon={GraduationCap} title="教育经历" />
              <div className="space-y-1.5 px-1">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-[14px] text-slate-800">{edu.school}</h3>
                      <p className="text-[12px] text-slate-500">{edu.description}</p>
                    </div>
                    <span className="text-[11px] text-slate-400 font-bold">{edu.period}</span>
                  </div>
                ))}
              </div>
            </GlassContainer>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <GlassContainer className="py-2 px-4 shadow-sm">
              <SectionHeader icon={Briefcase} title="工作与实习经历" />
              <div className="space-y-1.5 px-1">
                {experience.map((exp, idx) => (
                  <div key={idx} className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-[14px] text-slate-800">{exp.company}</h3>
                      <p className="text-[12px] text-slate-500">{exp.role}</p>
                    </div>
                    <span className="text-[11px] text-slate-400 font-bold">{exp.period}</span>
                  </div>
                ))}
              </div>
            </GlassContainer>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <GlassContainer className="py-2 px-4 shadow-sm">
              <SectionHeader icon={Code} title="项目经历" />
              <div className="space-y-2 px-1">
                {projects.map((proj, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-0.5">
                      <h3 className="font-bold text-[14px] text-slate-800 leading-tight">{proj.name}</h3>
                      <span className="text-[10px] px-2 py-0.5 bg-brand/10 text-brand-dark rounded font-bold shrink-0 ml-2">{proj.tag}</span>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[12px] text-slate-600 leading-tight">
                        <span className="font-bold text-brand-dark">技术栈:</span> {proj.techStack}
                      </p>
                      <p className="text-[12px] text-slate-500 leading-tight text-justify">
                        {proj.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassContainer>
          )}

          {/* Awards */}
          {awards.length > 0 && (
            <GlassContainer className="py-2 px-4 shadow-sm">
              <SectionHeader icon={Trophy} title="奖项荣誉" />
              <div className="space-y-1 px-1">
                {awards.map((award, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="text-[12px] font-bold text-brand-dark shrink-0 leading-tight">{">"}</span>
                    <span className="text-[12px] font-medium text-slate-700 leading-tight">{award}</span>
                  </div>
                ))}
              </div>
            </GlassContainer>
          )}

          {/* Skills, Hobbies & Self-evaluation */}
          {skills.length > 0 && (
            <GlassContainer className="py-2 px-4 shadow-sm">
              <SectionHeader icon={Sparkles} title="特长、爱好与自我评价" />
              <div className="space-y-1 px-1">
                {skills.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-[12px] font-medium text-slate-700 leading-tight">
                      <span className="font-bold text-brand-dark">{item.label}：</span>{item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </GlassContainer>
          )}
        </div>
      </div>
    </div>
  );
}
