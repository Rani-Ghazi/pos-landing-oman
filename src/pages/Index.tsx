
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
      icon: <Store className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "أصحاب المحلات الصغيرة",
      description: "محلات العطور، البقالة، الإلكترونيات، الإكسسوارات، وكل من يدير نقطة بيع واحدة أو أكثر",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      iconColor: "text-blue-700",
      borderColor: "border-blue-300 hover:border-blue-400"
    },
    {
      icon: <Coffee className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "المقاهي والمطاعم",
      description: "نظام مرن يدعم الطلبات السريعة، الطاولات، الفواتير المنفصلة، وتتبّع المبيعات اليومية",
      bgColor: "bg-amber-50 hover:bg-amber-100",
      iconColor: "text-amber-700",
      borderColor: "border-amber-300 hover:border-amber-400"
    },
    {
      icon: <Truck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "الأنشطة المتنقلة والبازارات",
      description: "بيع ومتابعة المخزون والمبيعات من أي مكان عبر الجوال أو التابلت",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      iconColor: "text-purple-700",
      borderColor: "border-purple-300 hover:border-purple-400"
    },
    {
      icon: <Shirt className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "محلات الملابس والأحذية",
      description: "تتبّع المقاسات والألوان، الجرد السريع، وتسجيل المبيعات بنقرة واحدة",
      bgColor: "bg-pink-50 hover:bg-pink-100",
      iconColor: "text-pink-700",
      borderColor: "border-pink-300 hover:border-pink-400"
    },
    {
      icon: <Scissors className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "الأنشطة الخدمية",
      description: "الصالونات، المغاسل، المكاتب، أي نشاط يحتاج فواتير وتنظيم مدفوعات",
      bgColor: "bg-green-50 hover:bg-green-100",
      iconColor: "text-green-700",
      borderColor: "border-green-300 hover:border-green-400"
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
    <div className="min-h-screen bg-white overflow-x-hidden" dir="rtl">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 sm:py-4 px-4 sm:px-6 sticky top-0 z-50 shadow-sm transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Package className="w-5 h-5 sm:w-7 sm:h-7 text-white transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text leading-tight truncate">
                نظام نقاط البيع المتكامل
              </h1>
              <p className="text-xs sm:text-sm text-green-600 font-medium hidden sm:block truncate">الحل الأمثل للمحلات والمطاعم</p>
            </div>
          </div>
          <Button 
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg sm:rounded-xl px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group text-xs sm:text-sm md:text-base min-h-[40px] sm:min-h-[44px]"
          >
            <WhatsAppIcon className="w-4 h-4 ml-1 sm:ml-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 flex-shrink-0" />
            <span className="font-semibold whitespace-nowrap">
              <span className="hidden sm:inline">تواصل معنا</span>
              <span className="sm:hidden">واتساب</span>
            </span>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-green-50/40 to-blue-50/30 py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-100 to-green-50 text-green-800 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 md:mb-10 animate-fade-in border border-green-200/50 hover:scale-105 transition-all duration-500 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
              <span className="whitespace-nowrap">الحل الشامل لإدارة الأعمال في عُمان</span>
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 animate-bounce flex-shrink-0" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-6 sm:mb-8 md:mb-10 leading-tight animate-fade-in-up px-2">
              نظام نقاط البيع
              <span className="text-transparent bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text block mt-1 sm:mt-2 animate-gradient bg-300% bg-left">
                المتكامل والذكي
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-medium px-4">
              حل شامل مصمم خصيصاً لاحتياجات المحلات والمطاعم والبزنسات الصغيرة في عُمان. 
              نظام احترافي يعمل بدون إنترنت مع إدارة متكاملة لجميع عملياتك التجارية.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-stretch sm:items-center animate-fade-in-up px-4">
              <Button 
                size="lg" 
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 w-full sm:w-auto hover:scale-110 active:scale-95 group animate-pulse-glow font-bold min-h-[48px] sm:min-h-[52px] md:min-h-[56px]"
              >
                <span className="truncate">احصل على استشارة مجانية</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 group-hover:translate-x-2 transition-transform duration-500 flex-shrink-0" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl rounded-xl sm:rounded-2xl md:rounded-3xl hover:shadow-xl transition-all duration-500 w-full sm:w-auto hover:scale-110 active:scale-95 group font-bold min-h-[48px] sm:min-h-[52px] md:min-h-[56px]"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 sm:ml-3 group-hover:scale-125 transition-transform duration-500 flex-shrink-0" />
                <span className="truncate">شاهد العرض التوضيحي</span>
              </Button>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 animate-scale-in hover:scale-110 group rounded-2xl sm:rounded-3xl">
                <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 text-center">
                  <div className="text-green-500 mb-3 sm:mb-4 md:mb-5 flex justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {stat.icon}
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2 md:mb-3 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text group-hover:animate-pulse">{stat.number}</div>
                  <div className="text-xs sm:text-sm md:text-base font-medium text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Dashboard Preview */}
          <div className="relative max-w-6xl mx-auto animate-fade-in-up">
            <div className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[2rem] lg:rounded-[3rem] shadow-3xl border border-gray-200 overflow-hidden hover:shadow-4xl transition-all duration-700 hover:scale-105 group">
              <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 border-b border-gray-200">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="flex gap-1 sm:gap-2 md:gap-3">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-red-400 rounded-full hover:bg-red-500 transition-colors cursor-pointer animate-pulse"></div>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors cursor-pointer animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-green-400 rounded-full hover:bg-green-500 transition-colors cursor-pointer animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-medium text-gray-600 mr-2 sm:mr-3 md:mr-5 truncate">نظام نقاط البيع المتكامل</div>
                </div>
              </div>
              <div className="p-6 sm:p-8 md:p-12 lg:p-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-40 lg:h-40 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-2xl sm:rounded-3xl md:rounded-[2rem] flex items-center justify-center mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-10 shadow-3xl animate-float hover:scale-125 transition-transform duration-700 group-hover:rotate-6">
                    <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 text-white animate-pulse" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-black text-gray-900 mb-2 sm:mb-4 md:mb-6 lg:mb-8">لوحة التحكم الرئيسية</h3>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-4">إدارة شاملة لجميع عمليات البيع والمخزون والتقارير</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Background decoration */}
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-green-200 rounded-full opacity-20 animate-float blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-blue-200 rounded-full opacity-20 animate-float blur-2xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-purple-200 rounded-full opacity-15 animate-float blur-2xl" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-gray-900 mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-4">
              كل ما تحتاجه في مكان واحد
            </h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-medium px-4">
              مجموعة شاملة من الميزات المتقدمة المصممة خصيصاً لتسهيل إدارة عملك وزيادة الكفاءة والأرباح
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-white border border-gray-100 hover:border-green-200 hover:shadow-3xl transition-all duration-700 rounded-2xl sm:rounded-3xl md:rounded-[2rem] group hover:-translate-y-4 sm:hover:-translate-y-6 md:hover:-translate-y-8 animate-fade-in-up overflow-hidden hover:scale-105 relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 relative z-10">
                  <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 p-3 sm:p-4 md:p-5 lg:p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl sm:rounded-2xl md:rounded-3xl w-fit group-hover:bg-gradient-to-br group-hover:from-green-100 group-hover:to-green-200 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-gray-900 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl font-medium">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Target Audience Section - Fixed Contrast */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-100 to-green-50 text-green-800 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 md:mb-8 border border-green-200/50 hover:scale-105 transition-all duration-500 shadow-sm">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse flex-shrink-0" />
              <span className="whitespace-nowrap">مناسب لجميع الأعمال</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight px-4">
              نظامنا يناسب
            </h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium px-4">
              مصمم خصيصاً لهذه الأنشطة التجارية المتنوعة
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {targetAudiences.map((audience, index) => (
              <Card 
                key={index} 
                className={`${audience.bgColor} ${audience.borderColor} border-2 shadow-lg hover:shadow-2xl transition-all duration-700 rounded-xl sm:rounded-2xl md:rounded-3xl group hover:-translate-y-2 sm:hover:-translate-y-3 md:hover:-translate-y-4 animate-fade-in-up overflow-hidden hover:scale-105 relative`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 relative z-10">
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white rounded-xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mx-auto mb-4 sm:mb-6 md:mb-8 border-2 ${audience.borderColor}`}>
                      <div className={audience.iconColor}>
                        {audience.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-0.5 sm:mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-gray-900 leading-tight">
                      {audience.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl font-medium mr-6 sm:mr-8 md:mr-10 group-hover:text-gray-800 transition-colors duration-300">
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10 sm:mt-12 md:mt-16 lg:mt-20">
            <Button 
              size="lg" 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 w-full sm:w-auto max-w-sm sm:max-w-md md:max-w-none hover:scale-110 active:scale-95 group animate-pulse-glow font-bold min-h-[48px] sm:min-h-[52px] md:min-h-[56px]"
            >
              <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ml-2 sm:ml-3 md:ml-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 flex-shrink-0" />
              <span className="truncate">اكتشف كيف يناسب نظامنا عملك</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 bg-gradient-to-r from-green-100 to-green-50 text-green-800 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-xs sm:text-sm md:text-base font-semibold mb-6 sm:mb-8 md:mb-10 border border-green-200/50 hover:scale-110 transition-all duration-500">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce flex-shrink-0" />
                <span className="whitespace-nowrap">خدماتنا المتكاملة</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-gray-900 mb-6 sm:mb-8 md:mb-10 leading-tight">
                نقوم بكل شيء من أجلك
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 mb-8 sm:mb-10 md:mb-12 leading-relaxed font-medium">
                لا تقلق بشأن التفاصيل التقنية. فريقنا المتخصص سيتولى إعداد النظام بالكامل وتدريبك عليه حتى تصبح خبيراً.
              </p>
              
              <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 animate-fade-in-up group hover:scale-110 transition-all duration-500" style={{ animationDelay: `${index * 0.15}s` }}>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:shadow-3xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      <div className="text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 font-semibold leading-tight">{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl lg:text-2xl rounded-xl sm:rounded-2xl md:rounded-3xl mt-8 sm:mt-10 md:mt-12 shadow-2xl hover:shadow-3xl transition-all duration-500 w-full sm:w-auto hover:scale-110 active:scale-95 group animate-pulse-glow font-bold min-h-[48px] sm:min-h-[52px] md:min-h-[56px]"
              >
                <span className="truncate">ابدأ الآن - مجاناً</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-2 sm:mr-3 md:mr-4 group-hover:translate-x-2 transition-transform duration-500 flex-shrink-0" />
              </Button>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[2rem] lg:rounded-[3rem] shadow-3xl border border-gray-100 p-6 sm:p-8 md:p-10 lg:p-14 animate-fade-in-up hover:shadow-4xl transition-all duration-700 hover:scale-105">
                <div className="space-y-6 sm:space-y-8 md:space-y-10">
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 group hover:scale-110 transition-all duration-500">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 flex-shrink-0">
                      <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-green-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg md:text-xl lg:text-2xl truncate">إعداد سريع</h4>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium truncate">نظام جاهز خلال 24 ساعة</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 group hover:scale-110 transition-all duration-500">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 flex-shrink-0">
                      <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-blue-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg md:text-xl lg:text-2xl truncate">تدريب شامل</h4>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium truncate">تدريب عملي لجميع المستخدمين</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 group hover:scale-110 transition-all duration-500">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 flex-shrink-0">
                      <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-purple-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg md:text-xl lg:text-2xl truncate">دعم مستمر</h4>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium truncate">مساعدة فنية 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 group hover:scale-110 transition-all duration-500">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 flex-shrink-0">
                      <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-orange-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg md:text-xl lg:text-2xl truncate">ضمان الجودة</h4>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium truncate">ضمان شامل لمدة سنة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-green-50/40 to-blue-50/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-gray-900 mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-4">
              ماذا يقول عملاؤنا؟
            </h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 font-medium px-4">تجارب حقيقية من أصحاب أعمال نجحوا معنا</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl md:rounded-[2rem] hover:shadow-3xl hover:border-green-200 transition-all duration-700 animate-fade-in-up group hover:-translate-y-3 sm:hover:-translate-y-4 md:hover:-translate-y-6 hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="flex mb-4 sm:mb-6 md:mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  <div className="inline-block bg-gradient-to-r from-green-100 to-green-50 text-green-800 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-5 py-1 sm:py-2 md:py-3 rounded-full mb-4 sm:mb-6 md:mb-8 font-semibold border border-green-200/50 group-hover:scale-110 transition-all duration-300">
                    {testimonial.highlight}
                  </div>
                  <p className="text-gray-700 mb-6 sm:mb-8 md:mb-10 italic leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl font-medium">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg md:text-xl ml-3 sm:ml-4 md:ml-5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <h5 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl truncate">{testimonial.name}</h5>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium truncate">عميل راضي</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-green-500 via-green-600 to-green-700 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white mb-6 sm:mb-8 md:mb-10 animate-fade-in-up px-4">
            جاهز لتطوير عملك؟
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-green-100 mb-10 sm:mb-12 md:mb-16 leading-relaxed max-w-5xl mx-auto font-medium animate-fade-in-up px-4">
            تواصل معنا الآن واحصل على استشارة مجانية وعرض سعر مخصص لعملك. فريقنا جاهز لمساعدتك في أي وقت.
          </p>
          <div className="flex justify-center animate-fade-in-up">
            <Button 
              size="lg" 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="bg-white text-green-600 hover:bg-gray-50 px-8 sm:px-12 md:px-16 lg:px-20 py-5 sm:py-6 md:py-7 text-base sm:text-lg md:text-xl lg:text-2xl rounded-2xl sm:rounded-3xl md:rounded-[2rem] font-bold shadow-3xl hover:shadow-4xl transition-all duration-500 w-full sm:w-auto max-w-xs sm:max-w-sm md:max-w-none hover:scale-115 active:scale-95 group animate-pulse-glow min-h-[48px] sm:min-h-[52px] md:min-h-[56px]"
            >
              <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ml-3 sm:ml-4 md:ml-5 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 flex-shrink-0" />
              <span className="truncate">تواصل على الواتساب</span>
            </Button>
          </div>
        </div>
        
        {/* Enhanced Background decoration */}
        <div className="absolute top-10 left-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/10 rounded-full animate-float blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-white/10 rounded-full animate-float blur-2xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-white/5 rounded-full animate-float blur-2xl" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0">
                <Package className="w-6 h-6 sm:w-8 sm:h-8 md:w-11 md:h-11 text-white" />
              </div>
              <div className="text-center sm:text-right min-w-0">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black block truncate">نظام نقاط البيع المتكامل</span>
                <span className="text-green-400 text-sm sm:text-base md:text-lg lg:text-xl font-medium block truncate">الحل الأمثل للأعمال العُمانية</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed font-medium px-4">
              نحن ملتزمون بتقديم حلول تقنية احترافية ومبتكرة للبزنسات الصغيرة والمتوسطة في سلطنة عُمان، 
              مع التركيز على الجودة والموثوقية والدعم المستمر.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8 sm:pt-10 md:pt-12">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8">
              <p className="text-gray-500 text-xs sm:text-sm md:text-base font-medium text-center sm:text-right">© 2025 جميع الحقوق محفوظة - نظام نقاط البيع المتكامل</p>
              <div className="flex gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm md:text-base">
                <span className="text-gray-500 font-medium">صنع بـ ❤️ في عُمان</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Floating WhatsApp Button */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 z-50">
        <Button
          onClick={() => window.open(whatsappUrl, '_blank')}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 shadow-3xl hover:shadow-4xl transition-all duration-500 animate-bounce hover:animate-none hover:scale-125 active:scale-95 group"
        >
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-12 lg:h-12 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
