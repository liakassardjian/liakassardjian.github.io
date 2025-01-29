const apps = [
    [
        {
            name: "Paramount+",
            description: "Paramount+ is an American streaming service provided by Paramount Streaming. It is supported in several platforms and I had the oportunity to contribute with the iOS, iPadOS and tvOS versions of the app. More specifically, I deeply contributed with UI features on the tvOS app, handling Focus and Search Bar functionalities in the app.",
            roles: "Senior iOS Developer",
            development: "UIKit, SwiftUI, Focus Engine, SPM, VoiceOver, Compositional Layout, Diffable Data Source",
            appStoreLink: "https://apps.apple.com/br/app/paramount/id1340650234",
            gitHubLink: "",
            youtubeLink: "",
            imagePath: "./assets/icons/paramount.png",
            platforms: "iOS, iPadOS and tvOS"
        },
        {
            name: "Paramount+",
            description: "Paramount+ é um serviço de streaming americano fornecido pela Paramount Streaming. Ele é suportado em várias plataformas e eu tive a oportunidade de contribuir com as versões iOS, iPadOS e tvOS do aplicativo. Mais especificamente, contribuí com recursos de UI no aplicativo tvOS, lidando com as funcionalidades de foco e pesquisa no aplicativo.",
            roles: "Senior iOS Developer",
            development: "UIKit, SwiftUI, Focus Engine, SPM, VoiceOver, Compositional Layout, Diffable Data Source",
            appStoreLink: "https://apps.apple.com/br/app/paramount/id1340650234",
            gitHubLink: "",
            youtubeLink: "",
            imagePath: "./assets/icons/paramount.png",
            platforms: "iOS, iPadOS and tvOS"
        }
    ],
    [
        {
            name: "Purple Notebook",
            description: "The Purple Notebook is an app built from students to students. An app thought to be the best notes app for students, created in a way to make note taking easier and faster during class. Using Apple's Vision framework, students can even create notes from pictures they've taken.",
            roles: "Code QA and Developer",
            development: "UIKit, View Code, macCatalyst, VoiceOver",
            appStoreLink: "",
            gitHubLink: "https://github.com/Pepelelipa/MacroChallenge",
            youtubeLink: "https://youtu.be/FLdkDszyDtU",
            imagePath: "./assets/icons/purplenotebook.png",
            platforms: "iOS, iPadOS and macOS"
        },
        {
            name: "Caderno Roxo",
            description: "O Caderno Roxo é um app construído por estudantes para estudantes. Um aplicativo pensado para ser o melhor app de notas para estudantes, criado para que fazer anotações seja mais fácil e rápido durante a aula. Usando o framework Vision da Apple, alunos podem até mesmo criar notas a partir de imagens.",
            roles: "QA de código e Desenvolvedora",
            development: "UIKit, View Code, macCatalyst, VoiceOver",
            appStoreLink: "",
            gitHubLink: "https://github.com/Pepelelipa/MacroChallenge",
            youtubeLink: "https://youtu.be/FLdkDszyDtU",
            imagePath: "./assets/icons/purplenotebook.png",
            platforms: "iOS, iPadOS e macOS"
        }
    ],
    [
        {
            name: "Generate",
            description: "Generate is a screen saver application for Apple TV that exhibit generative artwork. Thinking about encouraging people to know more about science, this app shows more information about who created the fractals and a little of their history. The user of the app can pause, take a print and can save different patterns of the art.",
            roles: "Developer",
            development: "Metal, tvOS, UIKit, Storyboard and MVC",
            appStoreLink: "",
            gitHubLink: "https://github.com/guienes/ArteGenerativa-AppleTV",
            youtubeLink: "",
            imagePath: "./assets/icons/generate.png",
            platforms: "tvOS"
        },
        {
            name: "Generate",
            description: "Generate é um aplicativo de protetor de tela para Apple TV que exibe padrões de arte generativa. Pensando em encorajar pessoas a conhecer mais sobre ciência, esse app mostra mais informações sobre quem criou cada fractal e fala um pouco sobre sua história. O usuário pode pausar, tirar prints e, ainda, salvar diferentes padrões a partir da arte.",
            roles: "Desenvolvedora",
            development: "Metal, tvOS, UIKit, Storyboard e MVC",
            appStoreLink: "",
            gitHubLink: "https://github.com/guienes/ArteGenerativa-AppleTV",
            youtubeLink: "",
            imagePath: "./assets/icons/generate.png",
            platforms: "tvOS"
        }
    ],
    [
        {
            name: "Proficiente",
            description: "Proficiente is an app built to bring transparency to accessibility in the market. In this app, you can check information on companies and leave reviews about yout experience as an employee, so that people can know if a company is accessible or not.",
            roles: "SCRUM Master and Developer",
            development: "UIKit, Storyboard, VoiceOver, MVC and APIs",
            appStoreLink: "",
            gitHubLink: "https://github.com/LuizHMC/acessibilidade_mc3",
            youtubeLink: "",
            imagePath: "./assets/icons/proficiente.png",
            platforms: "iOS"
        },
        {
            name: "Proficiente",
            description: "Proficiente é um app construído para trazer transparência para a acessibilidade no mercado de trabalho. Nesse app, você pode conferir as informações sobre empresas e deixar suas avaliações sobre sus experiência como funcionário, para que outras pessoas saibam se uma empresa é acessível ou não.",
            roles: "SCRUM Master e Desenvolvedora",
            development: "UIKit, Storyboard, VoiceOver, MVC e APIs",
            appStoreLink: "",
            gitHubLink: "https://github.com/LuizHMC/acessibilidade_mc3",
            youtubeLink: "",
            imagePath: "./assets/icons/proficiente.png",
            platforms: "iOS"
        }
    ],
    [
        {
            name: "Gravity",
            description: "Gravity is a personal project and a purely entertaining app, with colorful little balls that roll from one side to another, according to gravity's direction. This app was entirely built with UIKit, with the purpose of studying the framework's animation possibilities.",
            roles: "Product owner and Developer",
            development: "UIKit",
            appStoreLink: "",
            gitHubLink: "https://github.com/liakassardjian/Gravity",
            youtubeLink: "",
            imagePath: "./assets/icons/gravity.png",
            platforms: "iOS"
        },
        {
            name: "Gravity",
            description: "Gravity é um projeto pessoal e um aplicativo puramente para entretenimento, com várias bolinhas coloridas que rolam de um lado para o outro, de acordo com a direção da gravidade. Esse app foi construído inteiramente com UIKit, com o propósito de estudar as possibilidades de animação do framework.",
            roles: "Responsável pelo projeto e Desenvolvedora",
            development: "UIKit",
            appStoreLink: "",
            gitHubLink: "https://github.com/liakassardjian/Gravity",
            youtubeLink: "",
            imagePath: "./assets/icons/gravity.png",
            platforms: "iOS"
        }
    ],
    [
        {
            name: "React",
            description: "React is an application that uses augmented reality with image tracking to be able to teach chemistry in an easier and more intuitive way for students. The idea of a solution that can be implemented by schools!",
            roles: "Designer",
            development: "ARKit and SceneKit",
            appStoreLink: "",
            gitHubLink: "https://github.com/andradejoaoh/ARKit/tree/developer",
            youtubeLink: "",
            imagePath: "./assets/icons/react.png",
            platforms: "iOS"
        },
        {
            name: "React",
            description: "React é uma aplicação que usa realidade aumentada com reconhecimento de imagem para ensinar química de modo mais fácil e intuitivo para alunos. A ideia é que a solução possa ser implementada e usada por escolas!",
            roles: "Designer",
            development: "ARKit e SceneKit",
            appStoreLink: "",
            gitHubLink: "https://github.com/andradejoaoh/ARKit/tree/developer",
            youtubeLink: "",
            imagePath: "./assets/icons/react.png",
            platforms: "iOS"
        }
    ]
];