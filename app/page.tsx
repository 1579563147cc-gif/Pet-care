import { CalendarCheck, Send, ClipboardList, Phone } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

type NavItem = {
  href: string;
  label: string;
};

type CardItem = {
  title: string;
  text: string;
};

type PriceItem = {
  title: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
};

type EnvironmentItem = {
  src: string;
  alt: string;
  title: string;
  text: string;
};

const navItems: NavItem[] = [
  { href: "#services", label: "洗护项目" },
  { href: "#process", label: "护理流程" },
  { href: "#prices", label: "价目表" },
  { href: "#reviews", label: "客户评价" },
  { href: "#contact", label: "门店位置" }
];

const metrics = [
  ["4.9", "本地客户评分"],
  ["45min", "小型犬基础洗护"],
  ["09:30", "每日开始营业"]
];

const services: CardItem[] = [
  {
    title: "基础洗护",
    text: "温和清洁、耳道护理、指甲修剪和脚底毛整理，适合日常清洁和定期护理。"
  },
  {
    title: "造型修剪",
    text: "根据体型、脸型和毛量微调造型，让宠物看起来清爽自然，也方便日常打理。"
  },
  {
    title: "皮毛养护",
    text: "针对换毛、毛结、干燥和敏感皮肤做深层护理，并给出居家梳理建议。"
  }
];

const environment: EnvironmentItem[] = [
  {
    src: assetPath("/assets/environment-reception.png"),
    alt: "泡泡爪 Pet Spa 接待等候区",
    title: "接待等候区",
    text: "到店先确认宠物状态、护理需求和主人偏好，减少等待和反复沟通。"
  },
  {
    src: assetPath("/assets/environment-wash.png"),
    alt: "泡泡爪 Pet Spa 洗护 SPA 区",
    title: "洗护 SPA 区",
    text: "分区洗护、控温冲洗，尽量降低陌生环境带来的紧张感。"
  },
  {
    src: assetPath("/assets/environment-styling.png"),
    alt: "泡泡爪 Pet Spa 造型美容区",
    title: "造型美容区",
    text: "美容师按毛发状态和造型目标操作，重点照顾耳朵、脚底和腹部细节。"
  }
];

const processSteps: CardItem[] = [
  {
    title: "预约沟通",
    text: "提前确认宠物体型、年龄、毛量、皮肤状态和是否怕水怕吹风。"
  },
  {
    title: "到店评估",
    text: "美容师检查毛结、耳道、指甲和皮肤情况，再确认本次护理方案。"
  },
  {
    title: "护理记录",
    text: "护理结束后同步状态反馈、居家建议和下一次适合的预约周期。"
  }
];

const prices: PriceItem[] = [
  {
    title: "基础洗护",
    price: "¥98",
    description: "适合短毛犬猫和日常清洁需求。",
    features: ["低敏沐浴清洁", "基础耳甲护理", "指甲与脚底毛修整"]
  },
  {
    title: "精致洗剪",
    price: "¥168",
    description: "适合需要造型、修圆、修短的宠物。",
    features: ["全套基础洗护", "美容师造型修剪", "毛发蓬松护理"],
    featured: true
  },
  {
    title: "深层养护",
    price: "¥238",
    description: "适合换毛期、长毛和皮毛状态不佳的宠物。",
    features: ["保湿修复护理", "开结与废毛梳理", "护理报告与居家建议"]
  }
];

const members: CardItem[] = [
  {
    title: "月度护理卡",
    text: "适合短毛犬猫和日常清洁需求，固定周期洗护，减少临时排队。"
  },
  {
    title: "换毛养护卡",
    text: "适合春秋换毛、长毛打理和皮毛干燥宠物，重点做废毛梳理与保湿护理。"
  },
  {
    title: "造型维护卡",
    text: "适合贵宾、比熊、雪纳瑞等需要保持轮廓的宠物，按脸型和毛量微调。"
  }
];

const faqs: CardItem[] = [
  {
    title: "第一次洗护需要准备什么？",
    text: "建议携带免疫记录，提前说明年龄、是否怕水、是否有皮肤病史或近期用药情况。"
  },
  {
    title: "宠物很胆小可以洗吗？",
    text: "可以先做低刺激护理。我们会拉长适应时间，减少高噪声和强制动作，必要时拆分护理项目。"
  },
  {
    title: "严重打结怎么收费？",
    text: "会先评估毛结位置和贴皮程度，再告知处理方式与加收费用，不会在未确认前直接剃短。"
  },
  {
    title: "可以指定美容师吗？",
    text: "可以。熟悉同一位美容师后，宠物更容易放松，造型偏好也会保存在护理档案里。"
  },
  {
    title: "洗完多久适合再来？",
    text: "多数宠物建议 3 到 5 周一次；长毛、易打结或皮肤敏感的宠物会给出单独周期建议。"
  },
  {
    title: "可以只做局部护理吗？",
    text: "可以预约剪指甲、脚底毛、耳道清洁、局部开结等项目，具体时长按现场状态确认。"
  }
];

const reviews = [
  {
    name: "可可主人",
    service: "精致洗剪 · 小型犬",
    avatar: "可",
    text: "我家小狗以前很怕吹风，这次美容师一直安抚，洗完还主动摇尾巴。店里很干净，护理记录也说得很细。",
    featured: true
  },
  {
    name: "糯米主人",
    service: "深层养护 · 长毛猫",
    avatar: "糯",
    text: "长毛猫开结很细心，没有硬扯。回家毛蓬蓬的，皮肤情况也讲得清楚。"
  },
  {
    name: "豆豆主人",
    service: "造型修剪 · 泰迪",
    avatar: "豆",
    text: "预约准时，价格透明。剪出来不是千篇一律，真的有按狗狗脸型做调整。"
  },
  {
    name: "布丁主人",
    service: "舒缓洗护 · 英短",
    avatar: "布",
    text: "第一次带胆小的猫出门洗护，本来很担心。工作人员会先让它熟悉环境，整个过程比我想象中温柔很多。"
  },
  {
    name: "球球主人",
    service: "基础洗护 · 柯基",
    avatar: "球",
    text: "洗完不是香味很冲的那种，毛很蓬松，抱起来干干净净。还提醒我耳朵要继续观察，挺负责的。"
  },
  {
    name: "摩卡主人",
    service: "精修造型 · 雪纳瑞",
    avatar: "摩",
    text: "我们家雪纳瑞胡子很容易洗不干净，这次修得很精神，边角也处理得很利落，拍照特别上镜。"
  },
  {
    name: "桃桃主人",
    service: "皮毛护理 · 比熊",
    avatar: "桃",
    text: "店员会提前确认是否有皮肤敏感和疫苗情况，洗护后还发了护理建议，感觉不是只做一次生意。"
  },
  {
    name: "米粒主人",
    service: "老年犬洗护 · 博美",
    avatar: "米",
    text: "老年狗腿脚不太方便，美容师动作很慢也很稳，全程有耐心。洗完精神状态很好，家里人都放心。"
  }
];

function Header() {
  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#top" aria-label="回到首页">
            <span className="brand-mark">P</span>
            <span>泡泡爪 Pet Spa</span>
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <a className="phone-action" href="tel:02188886620" aria-label="拨打预约电话">
              <Phone aria-hidden="true" />
            </a>
            <a className="nav-cta" href="#booking">
              预约
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="booking" aria-label="泡泡爪 Pet Spa 快速预约">
      <img
        className="hero-img"
        src={assetPath("/assets/pet-grooming-hero.png")}
        alt="明亮宠物洗护店里，一只完成护理的小狗坐在美容台上"
      />
      <div className="hero-inner">
        <div className="hero-copy-panel">
          <span className="eyebrow">一定一浴中 · 可视化洗护</span>
          <h1>泡泡爪 Pet Spa</h1>
          <p className="hero-copy">
            为猫狗提供洗澡、精修、皮毛护理和幼宠适应服务。透明操作区、低噪吹干间和独立消毒工具，让每次洗护都更安心。
          </p>
          <div className="hero-actions">
            <a className="button" href="tel:02188886620">
              <CalendarCheck className="button-icon" aria-hidden="true" />
              <span>立即预约</span>
            </a>
            <a className="button secondary" href="#prices">
              <ClipboardList className="button-icon" aria-hidden="true" />
              <span>查看价目</span>
            </a>
          </div>
          <div className="hero-metrics" aria-label="门店服务亮点">
            {metrics.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <aside className="booking-card" aria-label="快速预约">
          <h2>快速预约</h2>
          <p>提交后门店会在 10 分钟内确认档期。</p>
          <form>
            <label>
              联系人
              <input type="text" name="name" placeholder="你的称呼" />
            </label>
            <label>
              手机号
              <input type="tel" name="phone" placeholder="138 0000 0000" />
            </label>
            <label className="full">
              期望到店时间
              <input type="text" name="time" placeholder="2026/04/26 23:14" />
            </label>
            <label>
              宠物类型
              <select name="pet" defaultValue="小型犬">
                <option>小型犬</option>
                <option>中大型犬</option>
                <option>猫咪</option>
                <option>其他宠物</option>
              </select>
            </label>
            <label>
              预约服务
              <select name="service" defaultValue="精致洗剪">
                <option>精致洗剪</option>
                <option>日常洗护</option>
                <option>深层养护</option>
                <option>接送服务</option>
              </select>
            </label>
            <label className="full">
              备注
              <textarea
                name="message"
                placeholder="例如：怕吹风、容易紧张、需要剪指甲"
              />
            </label>
            <button className="button" type="button">
              <Send className="button-icon" aria-hidden="true" />
              <span>发送预约</span>
            </button>
          </form>
        </aside>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">服务项目</span>
          <h2>按宠物状态安排合适的护理节奏</h2>
          <p>从基础清洁到造型维护，每次护理前都会先确认宠物状态和主人期望。</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="card service-card" key={service.title}>
              <span className="card-icon">{service.title.slice(0, 1)}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Environment() {
  return (
    <section className="environment" id="environment">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">门店环境</span>
          <h2>明亮、分区、好清洁的洗护空间</h2>
          <p>不同区域承担不同护理流程，让到店体验更顺畅，也方便工作人员保持环境整洁。</p>
        </div>
        <div className="environment-layout">
          <div className="env-carousel" aria-label="店内不同区域轮播图">
            <div className="carousel-track">
              {environment.map((item, index) => (
                <figure className="carousel-slide" key={item.title}>
                  <img src={item.src} alt={item.alt} />
                  <figcaption className="slide-caption">
                    <span>AREA {String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="carousel-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="env-panel">
            {environment.map((item, index) => (
              <article className="env-item" key={item.title}>
                <span>SPACE {String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="process" id="process">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">护理流程</span>
          <h2>先了解，再护理，结束后有反馈</h2>
          <p>清晰流程能减少宠物紧张，也让主人知道每一项护理为什么需要做。</p>
        </div>
        <div className="process-grid">
          {processSteps.map((item, index) => (
            <article className="card process-card" key={item.title}>
              <span>{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Prices() {
  return (
    <section className="prices" id="prices">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">价格参考</span>
          <h2>常用洗护套餐清楚透明</h2>
          <p>实际价格会根据体型、毛量、打结程度和护理时长确认，到店前可先电话沟通。</p>
        </div>
        <div className="price-grid">
          {prices.map((item) => (
            <article
              className={`card price-card${item.featured ? " featured" : ""}`}
              key={item.title}
            >
              {item.featured ? <span className="tag">人气推荐</span> : null}
              <h3>{item.title}</h3>
              <div className="price">
                {item.price} <small>起</small>
              </div>
              <p>{item.description}</p>
              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Members() {
  return (
    <section className="members" id="members">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">会员护理</span>
          <h2>常来洗护的宠物，可以有更稳定的护理计划</h2>
          <p>会员权益更适合需要定期洗护、换毛管理或造型维护的家庭。</p>
        </div>
        <div className="member-grid">
          {members.map((member) => (
            <article className="card member-card" key={member.title}>
              <div>
                <span className="member-label">CARE PLAN</span>
                <strong>{member.title}</strong>
                <p>{member.text}</p>
              </div>
              <div className="member-note">包含护理记录、预约提醒和下次到店建议。</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">常见问题</span>
          <h2>提前了解这些细节，到店体验会更顺</h2>
          <p>特殊情况也可以先电话沟通，我们会给出更稳妥的安排。</p>
        </div>
        <div className="faq-grid">
          {faqs.map((faq) => (
            <article className="card faq-card" key={faq.title}>
              <h3>
                <span>Q</span>
                {faq.title}
              </h3>
              <p>{faq.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviewLoop = [...reviews, ...reviews];

  return (
    <section className="reviews" id="reviews">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">客户评价</span>
          <h2>让宠物愿意再进门，是我们最看重的反馈</h2>
          <p>除了洗干净、剪好看，主人也能清楚知道每一笔服务花在哪里。</p>
        </div>
        <div className="review-carousel" aria-label="客户评价轮播">
          <div className="review-track">
            {reviewLoop.map((review, index) => (
              <article
                className={`card quote${review.featured ? " featured" : ""}`}
                key={`${review.name}-${index}`}
                aria-hidden={index >= reviews.length ? "true" : undefined}
              >
                <div className="stars">★★★★★</div>
                <p>“{review.text}”</p>
                <div className="customer">
                  <div className="avatar">{review.avatar}</div>
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.service}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-band" id="contact">
      <div className="section-inner">
        <div className="store-info">
          <div className="store-copy">
            <span className="section-kicker">门店信息</span>
            <h2>来之前先预约，到店会更从容</h2>
            <p>位于广州市番禺区铁中路 2 号，建议提前预约到店。首次洗护可先电话沟通宠物体型、毛量和皮肤状态。</p>
            <div className="contact-grid">
              <div className="contact-item">
                <span>预约电话</span>
                <strong>021-8888 6620</strong>
              </div>
              <div className="contact-item">
                <span>营业时间</span>
                <strong>
                  周一至周日
                  <br />
                  09:30 - 20:00
                </strong>
              </div>
              <div className="contact-item">
                <span>门店地址</span>
                <strong>
                  广州市番禺区
                  <br />
                  铁中路 2 号
                </strong>
              </div>
              <div className="contact-item">
                <span>到店提醒</span>
                <strong>首次到店请携带免疫记录</strong>
              </div>
            </div>
          </div>
          <div className="map-card">
            <img src={assetPath("/assets/store-environment.png")} alt="泡泡爪 Pet Spa 门店环境" />
            <iframe
              title="泡泡爪 Pet Spa 地图位置"
              src="https://www.google.com/maps?q=%E5%B9%BF%E5%B7%9E%E5%B8%82%E7%95%AA%E7%A6%BA%E5%8C%BA%E9%93%81%E4%B8%AD%E8%B7%AF2%E5%8F%B7&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="map-badge">
              <span>泡泡爪 Pet Spa</span>
              <strong>广州市番禺区铁中路 2 号</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <span>© 2026 泡泡爪 Pet Spa</span>
        <span>高端洗护 · 精致修剪 · 皮毛养护</span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <Environment />
        <Process />
        <Prices />
        <Members />
        <Faq />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
