
module.exports = {
    trainlingSlash: true,
    async redirects() {
        return [
          {
            source: '/perguntas',
            destination: '/faq',
            permanent: true,
          },
        ]
    }
}