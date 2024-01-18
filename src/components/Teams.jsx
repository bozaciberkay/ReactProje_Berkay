import { motion } from "framer-motion";
const Teams = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 300 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-gray-50 dark:bg-gray-800 py-10"
      >
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="mb-16">
            <h2 className="mb-4 text-center text-4xl font-bold text-blue-400 dark:text-white md:text-4xl">
              YÖNETİM KURULUMUZ
            </h2>
            <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-7/12 text-xl">
              Derneğimizin değerli yönetim kurulu ekibi şu şekilde oluşmaktadır :
            </p>
          </div>
          <div className="grid  items-center gap-12 md:grid-cols-3">
            <div className="space-y-4 text-center">
              <img
                className="mx-auto h-64 w-64 rounded-xl object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
                src="avatar.jpg"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div>
                <h4 className="text-2xl text-gray-700 dark:text-white">
                  Fatih Mehmet Coşkun
                </h4>
                <span className="block text-sm text-gray-500">
                  Yönetim Kurulu Başkan Yardımcısı
                </span>
              </div>
            </div>
            <div className="space-y-4 text-center  md:row-span-2">
              <img
                className="mx-auto h-64 w-64 rounded-xl object-cover md:h-64 md:w-48 lg:h-80 lg:w-80"
                src="avatar.jpg"
                alt="man"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl text-gray-700 dark:text-white">Semih Kuldaş</h4>
                <span className="block text-sm text-gray-500">
                  Yönetim Kurulu Başkanı
                </span>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <img
                className="mx-auto h-64 w-64 rounded-xl object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
                src="avatar.jpg"
                alt="woman"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl text-gray-700 dark:text-white">
                  Burak Göközkut
                </h4>
                <span className="block text-sm text-gray-500">
                Muhasip Üye
                </span>
              </div>
            </div>
            {/* --- */}

            <div className="space-y-4 text-center">
              <img
                className="mx-auto h-64 w-64 rounded-xl object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
                src="avatar.jpg"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div>
                <h4 className="text-2xl text-gray-700 dark:text-white">
                  Berkay Bozacı
                </h4>
                <span className="block text-sm text-gray-500">
               Yönetim Kurulu Üyesi
                </span>
              </div>
            </div>

            <div className="space-y-4 text-center md:col-start-3  md:col-end-4">
              <img
                className="mx-auto h-64 w-64 rounded-xl object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
                src="avatar.jpg"
                alt="woman"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl text-gray-700 dark:text-white">
                Selaattin Kürkçü
                </h4>
                <span className="block text-sm text-gray-500">
                Yönetim Kurulu Üyesi
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/*   END OF SEC */}

      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 300 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-gray-50 dark:bg-gray-800 py-20"
      >
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="mb-16">
            <h2 className="mb-4 text-center text-4xl font-bold text-blue-400 dark:text-white md:text-4xl">
              DENETLEME KURULUMUZ
            </h2>
            <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-7/12 text-xl">
              Derneğimizin değerli denetim kurulu ekibi şu şekilde oluşmaktadır :
            </p>
          </div>
          <div className="grid items-center gap-12 md:grid-cols-3">
            <div className="space-y-4 text-center">
              <img
                className="mx-auto h-64 w-64 rounded-xl object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
                src="avatar.jpg"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div>
                <h4 className="text-2xl text-gray-700 dark:text-white">
                  Oğuzhan Birgin
                </h4>
                <span className="block text-sm text-gray-500 capitalize">
                  denetim kurulu üyesi
                </span>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <img
                className="mx-auto h-64 w-64 rounded-xl object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
                src="avatar.jpg"
                alt="man"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl text-gray-700 dark:text-white">
                 Mert Korucuoğlu
                </h4>
                <span className="block text-sm text-gray-500 capitalize">
                  denetim kurulu üyesi
                </span>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <img
                className="mx-auto h-64 w-64 rounded-xl object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
                src="avatar.jpg"
                alt="woman"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl text-gray-700 dark:text-white">
                  Serdar Fidan
                </h4>
                <span className="block text-sm text-gray-500 capitalize">
                  denetim kurulu üyesi
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Teams;
