import { MessageCircle, Shield, FileText, Percent, Printer, Package, Building2, BarChart3, Users, Gift, Smartphone, CheckCircle, ArrowRight, Star, Zap, TrendingUp, Play, Clock, HeadphonesIcon, Award, Store, Coffee, Truck, Shirt, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Custom WhatsApp SVG Component from Flaticon
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.52 3.449C18.24.85 15.033-.3 11.704-.3 5.32-.3.16 4.88.157 11.293c0 2.052.528 4.055 1.533 5.826l-1.63 5.945 6.087-1.596c1.706.936 3.622 1.43 5.583 1.43h.005c6.378 0 11.54-5.178 11.54-11.545 0-3.087-1.2-5.992-3.378-8.204zM11.704 20.9c-1.746 0-3.455-.47-4.952-1.354l-.355-.21-3.676.964 1.007-3.676-.23-.37c-.97-1.54-1.482-3.32-1.482-5.14 0-5.338 4.347-9.69 9.69-9.69 2.587 0 5.02 1.007 6.854 2.84 1.835 1.835 2.842 4.267 2.842 6.856-.003 5.34-4.35 9.69-9.698 9.69zm5.32-7.26c-.292-.146-1.725-.85-1.993-.948-.267-.098-.462-.146-.656.146-.194.292-.752.948-.922 1.144-.17.195-.34.22-.632.073-.292-.146-1.23-.453-2.342-1.446-.865-.773-1.45-1.728-1.62-2.02-.17-.292-.018-.45.128-.595.13-.13.292-.34.438-.51.146-.17.195-.292.292-.487.098-.194.05-.364-.024-.51-.073-.146-.656-1.58-.9-2.165-.238-.57-.48-.493-.656-.502-.17-.008-.364-.01-.558-.01-.194 0-.51.073-.777.365-.267.292-1.02.996-1.02 2.43 0 1.434 1.044 2.82 1.19 3.016.146.194 2.054 3.135 4.976 4.398.696.3 1.238.48 1.66.615.7.222 1.336.19 1.84.115.56-.083 1.725-.705 1.968-1.384.243-.68.243-1.264.17-1.384-.073-.12-.267-.194-.56-.34z"/>
  </svg>
);

const Index = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "يعمل بدون إنترنت",
      description: "نظام موثوق يعمل حتى في حالة انقطاع الإنترنت مع حفظ تلقائي للبيانات"
    },
    {
      icon: <FileText className="w-6 h-6 text-green-600" />,
      title: "فواتير إلكترونية وورقية", 
      description: "إصدار فواتير متوافقة مع معايير الضريبة العُمانية والتشريعات المحلية"
    },
    {
      icon: <Percent className="w-6 h-6 text-green-600" />,
      title: "خصومات واسترجاع",
      description: "إدارة مرنة للخصومات والعروض والمرتجعات مع تتبع دقيق للأرباح"
    },
    {
      icon: <Printer className="w-6 h-6 text-green-600" />,
      title: "ربط الطابعات ودرج النقود",
      description: "اتصال سلس مع جميع أنواع الطابعات وأدراج النقود والأجهزة الطرفية"
    },
    {
      icon: <Package className="w-6 h-6 text-green-600" />,
      title: "إدارة المخزون الذكية",
      description: "تتبع الكميات مع تنبيهات انخفاض المخزون وتقارير حركة البضائع"
    },
    {
      icon: <Building2 className="w-6 h-6 text-green-600" />,
      title: "دعم الفروع المتعددة",
      description: "إدارة جميع فروعك من حساب واحد مع مزامنة فورية للبيانات"
    }
  ];

  const targetAudiences = [
    {
      icon: <Store className="w-8 h-8 text-green-600" />,
      title: "أصحاب المحلات الصغيرة",
      description: "محلات العطور، البقالة، الإلكترونيات، الإكسسوارات، وكل من يدير نقطة بيع واحدة أو أكثر",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Coffee className="w-8 h-8 text-blue-600" />,
      title: "المقاهي والمطاعم",
      description: "نظام مرن يدعم الطلبات السريعة، الطاولات، الفواتير المنفصلة، وتتبّع المبيعات اليومية",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Truck className="w-8 h-8 text-purple-600" />,
      title: "الأنشطة المتنقلة والبازارات",
      description: "بيع ومتابعة المخزون والمبيعات من أي مكان عبر الجوال أو التابلت",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shirt className="w-8 h-8 text-pink-600" />,
      title: "محلات الملابس والأحذية",
      description: "تتبّع المقاسات والألوان، الجرد السريع، وتسجيل المبيعات بنقرة واحدة",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      icon: <Scissors className="w-8 h-8 text-orange-600" />,
      title: "الأنشطة الخدمية",
      description: "الصالونات، المغاسل، المكاتب، أي نشاط يحتاج فواتير وتنظيم مدفوعات",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  const benefits = [
    { icon: <Zap className="w-5 h-5" />, text: "إعداد النظام بالكامل خلال 24 ساعة" },
    { icon: <Package className="w-5 h-5" />, text: "رفع جميع المنتجات والأسعار مجاناً" },
    { icon: <Printer className="w-5 h-5" />, text: "ربط وإعداد الأجهزة والطابعات" },
    { icon: <Users className="w-5 h-5" />, text: "تدريب شامل لجميع المستخدمين" },
    { icon: <HeadphonesIcon className="w-5 h-5" />, text: "دعم فني مستمر على مدار الساعة" }
  ];

  const testimonials = [
    {
      name: "أحمد الزدجالي",
      text: "النظام غيّر طريقة عملنا بالكامل! زادت سرعة الخدمة والعملاء راضين أكثر من قبل.",
      rating: 5,
      highlight: "تحسن كبير في الخدمة"
    },
    {
      name: "فاطمة الشكيلية", 
      text: "إدارة المخزون صارت سهلة جداً، والتقارير تساعدني أتخذ قرارات صحيحة للبيزنس.",
      rating: 5,
      highlight: "إدارة أفضل للمخزون"
    },
    {
      name: "سالم البوسعيدي",
      text: "ربط كل الفروع في مكان واحد وفر عليّ وقت كثير وخلاني أراقب كل شيء بسهولة.",
      rating: 5,
      highlight: "توفير الوقت والجهد"
    },
    {
      name: "عائشة الهنائية",
      text: "النظام ساعدني أفهم أرباحي الحقيقية وأضبط الأسعار عشان أزيد المبيعات.",
      rating: 5,
      highlight: "زيادة في الأرباح"
    },
    {
      name: "محمد الغافري",
      text: "الفواتير الإلكترونية والضرائب كلها صارت أوتوماتيك، ما عاد في تعقيدات.",
      rating: 5,
      highlight: "بساطة في العمل"
    },
    {
      name: "مريم الرواحية",
      text: "الدعم الفني ممتاز ويردون بسرعة، أي مشكلة تنحل في نفس اليوم.",
      rating: 5,
      highlight: "دعم فني ممتاز"
    },
    {
      name: "خالد الكندي",
      text: "النظام يشتغل حتى لو انقطع النت، ما في توقف في العمل أبداً.",
      rating: 5,
      highlight: "موثوقية عالية"
    },
    {
      name: "نورا المقبالية",
      text: "التقارير اليومية والشهرية واضحة ومفصلة، سهلت عليّ المتابعة كثير.",
      rating: 5,
      highlight: "تقارير مفصلة"
    },
    {
      name: "علي الحارثي",
      text: "التدريب كان ممتاز وموظفيني تعلموا النظام بسرعة، والآن كلهم يحبون يشتغلون عليه.",
      rating: 5,
      highlight: "سهولة التعلم"
    },
    {
      name: "سارة الجابرية",
      text: "أسعار النظام معقولة مقارنة بالفوائد اللي حصلت عليها، استثمار ممتاز.",
      rating: 5,
      highlight: "قيمة ممتازة"
    },
    {
      name: "يوسف الريامي",
      text: "النظام خلاني أعرف أكثر المنتجات مبيعاً وأركز عليها، زادت أرباحي بشكل واضح.",
      rating: 5,
      highlight: "فهم أفضل للمبيعات"
    },
    {
      name: "أمل الحبسية",
      text: "الأمان والحماية في النظام ممتازة، بياناتي محفوظة ومحمية بأقوى الطرق.",
      rating: 5,
      highlight: "أمان وحماية"
    }
  ];

  const stats = [
    { number: "500+", label: "عميل راضي", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "1000+", label: "فاتورة يومياً", icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "99.9%", label: "وقت التشغيل", icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "24/7", label: "دعم فني", icon: <HeadphonesIcon className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ];

  const whatsappNumber = "+96895454284";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن نظام نقاط البيع";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 sm:py-4 px-4 sm:px-6 sticky top-0 z-50 shadow-sm transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Package className="w-5 h-5 sm:w-7 sm:h-7 text-white transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text leading-tight">
                نظام نقاط البيع المتكامل
              </h1>
              <p className="text-xs sm:text-sm text-green-600 font-medium hidden sm:block">الحل الأمثل للمحلات والمطاعم</p>
            </div>
          </div>
          <Button 
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg sm:rounded-xl px-3 sm:px-8 py-2 sm:py-3 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group text-sm sm:text-base"
          >
            <WhatsAppIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
            <span className="hidden sm:inline font-semibold">تواصل معنا</span>
            <span className="sm:hidden font-semibold">واتساب</span>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-green-50/40 to-blue-50/30 py-12 sm:py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-100 to-green-50 text-green-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-fade-in-up shadow-sm border border-green-200/50 hover:scale-105 transition-all duration-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              الحل الشامل لإدارة الأعمال في عُمان
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 animate-bounce" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight animate-fade-in-up">
              نظام نقاط البيع
              <span className="text-transparent bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text block mt-2 animate-pulse">المتكامل والذكي</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-medium px-4 sm:px-0">
              حل شامل مصمم خصيصاً لاحتياجات المحلات والمطاعم والبزنسات الصغيرة في عُمان. 
              نظام احترافي يعمل بدون إنترنت مع إدارة متكاملة لجميع عملياتك التجارية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up px-4 sm:px-0">
              <Button 
                size="lg" 
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 w-full sm:w-auto hover:scale-110 active:scale-95 group animate-pulse-glow"
              >
                احصل على استشارة مجانية
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:translate-x-2 transition-transform duration-500" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-500 w-full sm:w-auto hover:scale-110 active:scale-95 group"
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:scale-125 transition-transform duration-500" />
                شاهد العرض التوضيحي
              </Button>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-700 animate-scale-in hover:scale-110 group">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className="text-green-500 mb-3 sm:mb-4 flex justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-1 sm:mb-2 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text group-hover:animate-pulse">{stat.number}</div>
                  <div className="text-xs sm:text-sm font-medium text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Dashboard Preview */}
          <div className="relative max-w-6xl mx-auto animate-fade-in-up">
            <div className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[2rem] shadow-2xl border border-gray-200 overflow-hidden hover:shadow-3xl transition-all duration-700 hover:scale-105">
              <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 border-b border-gray-200">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex gap-1 sm:gap-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-400 rounded-full hover:bg-red-500 transition-colors cursor-pointer animate-pulse"></div>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors cursor-pointer animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full hover:bg-green-500 transition-colors cursor-pointer animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-gray-600 mr-2 sm:mr-4">نظام نقاط البيع المتكامل</div>
                </div>
              </div>
              <div className="p-6 sm:p-8 md:p-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 min-h-[250px] sm:min-h-[300px] md:min-h-[500px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 md:mb-8 shadow-2xl animate-float hover:scale-125 transition-transform duration-700">
                    <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 text-white animate-pulse" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6">لوحة التحكم الرئيسية</h3>
                  <p className="text-gray-600 text-sm sm:text-base md:text-xl font-medium">إدارة شاملة لجميع عمليات البيع والمخزون والتقارير</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Background decoration */}
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-green-200 rounded-full opacity-20 animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 sm:w-32 sm:h-32 bg-blue-200 rounded-full opacity-20 animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 sm:w-24 sm:h-24 bg-purple-200 rounded-full opacity-15 animate-float blur-xl" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 md:mb-8">
              كل ما تحتاجه في مكان واحد
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              مجموعة شاملة من الميزات المتقدمة المصممة خصيصاً لتسهيل إدارة عملك وزيادة الكفاءة والأرباح
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-white border border-gray-100 hover:border-green-200 hover:shadow-2xl transition-all duration-700 rounded-2xl sm:rounded-3xl group hover:-translate-y-6 animate-fade-in-up overflow-hidden hover:scale-105"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6 sm:p-8 md:p-10">
                  <div className="mb-4 sm:mb-6 md:mb-8 p-3 sm:p-4 md:p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-xl sm:rounded-2xl w-fit group-hover:bg-gradient-to-br group-hover:from-green-100 group-hover:to-green-200 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg font-medium">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Target Audience Section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-green-50/20 to-blue-50/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-100 to-green-50 text-green-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold mb-8 sm:mb-10 border border-green-200/50 hover:scale-110 transition-all duration-500 shadow-lg">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
              مناسب لجميع الأعمال
            </div>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 sm:mb-8 md:mb-10 leading-tight">
              نظامنا يناسب
            </h3>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-medium">
              مصمم خصيصاً لهذه الأنشطة التجارية المتنوعة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {targetAudiences.map((audience, index) => (
              <Card 
                key={index} 
                className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 rounded-3xl sm:rounded-[2rem] group hover:-translate-y-8 animate-fade-in-up overflow-hidden hover:scale-105 relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${audience.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <CardContent className="p-8 sm:p-10 md:p-12 relative z-10">
                  <div className="mb-6 sm:mb-8 md:mb-10">
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r ${audience.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 mx-auto mb-6 sm:mb-8`}>
                      <div className="text-white">
                        {audience.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6 sm:mb-8">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-green-500 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                      {audience.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl font-medium mr-10 sm:mr-11 group-hover:text-gray-700 transition-colors duration-300">
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16 sm:mt-20 md:mt-24">
            <Button 
              size="lg" 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 sm:px-12 py-5 sm:py-6 text-lg sm:text-xl rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 w-full sm:w-auto max-w-md sm:max-w-none hover:scale-110 active:scale-95 group animate-pulse-glow font-bold"
            >
              <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 ml-3 sm:ml-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
              اكتشف كيف يناسب نظامنا عملك
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-100 to-green-50 text-green-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 border border-green-200/50 hover:scale-110 transition-all duration-500">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 animate-bounce" />
                خدماتنا المتكاملة
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8">
                نقوم بكل شيء من أجلك
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 leading-relaxed font-medium">
                لا تقلق بشأن التفاصيل التقنية. فريقنا المتخصص سيتولى إعداد النظام بالكامل وتدريبك عليه حتى تصبح خبيراً.
              </p>
              
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 sm:gap-4 md:gap-5 animate-fade-in-up group hover:scale-110 transition-all duration-500" style={{ animationDelay: `${index * 0.15}s` }}>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      <div className="text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    <span className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold">{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl rounded-xl sm:rounded-2xl mt-8 sm:mt-10 shadow-xl hover:shadow-2xl transition-all duration-500 w-full sm:w-auto hover:scale-110 active:scale-95 group animate-pulse-glow"
              >
                ابدأ الآن - مجاناً
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:translate-x-2 transition-transform duration-500" />
              </Button>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[2rem] shadow-2xl border border-gray-100 p-6 sm:p-8 md:p-12 animate-fade-in-up hover:shadow-3xl transition-all duration-700 hover:scale-105">
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-5 group hover:scale-110 transition-all duration-500">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                      <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg sm:text-xl">إعداد سريع</h4>
                      <p className="text-sm sm:text-base text-gray-600 font-medium">نظام جاهز خلال 24 ساعة</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-5 group hover:scale-110 transition-all duration-500">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                      <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg sm:text-xl">تدريب شامل</h4>
                      <p className="text-sm sm:text-base text-gray-600 font-medium">تدريب عملي لجميع المستخدمين</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-5 group hover:scale-110 transition-all duration-500">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                      <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg sm:text-xl">دعم مستمر</h4>
                      <p className="text-sm sm:text-base text-gray-600 font-medium">مساعدة فنية 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-5 group hover:scale-110 transition-all duration-500">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                      <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg sm:text-xl">ضمان الجودة</h4>
                      <p className="text-sm sm:text-base text-gray-600 font-medium">ضمان شامل لمدة سنة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-green-50/40 to-blue-50/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 md:mb-8">
              ماذا يقول عملاؤنا؟
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium">تجارب حقيقية من أصحاب أعمال نجحوا معنا</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl hover:shadow-2xl hover:border-green-200 transition-all duration-700 animate-fade-in-up group hover:-translate-y-4 hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 sm:p-8 md:p-10">
                  <div className="flex mb-4 sm:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  <div className="inline-block bg-gradient-to-r from-green-100 to-green-50 text-green-800 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-4 sm:mb-6 font-semibold border border-green-200/50 group-hover:scale-110 transition-all duration-300">
                    {testimonial.highlight}
                  </div>
                  <p className="text-gray-700 mb-6 sm:mb-8 italic leading-relaxed text-sm sm:text-base md:text-lg font-medium">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg ml-3 sm:ml-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.name}</h5>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium">عميل راضي</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-green-500 via-green-600 to-green-700 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 animate-fade-in-up">
            جاهز لتطوير عملك؟
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl text-green-100 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto font-medium animate-fade-in-up">
            تواصل معنا الآن واحصل على استشارة مجانية وعرض سعر مخصص لعملك. فريقنا جاهز لمساعدتك في أي وقت.
          </p>
          <div className="flex justify-center animate-fade-in-up">
            <Button 
              size="lg" 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="bg-white text-green-600 hover:bg-gray-50 px-12 sm:px-16 py-5 sm:py-6 text-lg sm:text-xl rounded-xl sm:rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 w-full sm:w-auto max-w-sm sm:max-w-none hover:scale-115 active:scale-95 group animate-pulse-glow"
            >
              <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 ml-3 sm:ml-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
              تواصل على الواتساب
            </Button>
          </div>
        </div>
        
        {/* Enhanced Background decoration */}
        <div className="absolute top-10 left-10 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 sm:w-16 sm:h-16 bg-white/5 rounded-full animate-float blur-xl" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Package className="w-6 h-6 sm:w-9 sm:h-9 text-white" />
              </div>
              <div className="text-center sm:text-right">
                <span className="text-2xl sm:text-3xl font-black block">نظام نقاط البيع المتكامل</span>
                <span className="text-green-400 text-sm sm:text-base font-medium">الحل الأمثل للأعمال العُمانية</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
              نحن ملتزمون بتقديم حلول تقنية احترافية ومبتكرة للبزنسات الصغيرة والمتوسطة في سلطنة عُمان، 
              مع التركيز على الجودة والموثوقية والدعم المستمر.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8 sm:pt-10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
              <p className="text-gray-500 text-xs sm:text-sm font-medium text-center sm:text-right">© 2025 جميع الحقوق محفوظة - نظام نقاط البيع المتكامل</p>
              <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
                <span className="text-gray-500 font-medium">صنع بـ ❤️ في عُمان</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-50">
        <Button
          onClick={() => window.open(whatsappUrl, '_blank')}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-bounce hover:animate-none hover:scale-125 active:scale-95 group"
        >
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
