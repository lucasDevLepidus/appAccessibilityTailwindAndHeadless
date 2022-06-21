import { Header } from '../../components/Header';

import {
  CodeIcon,
  DeviceMobileIcon,
  TrendingDownIcon,
  EyeOffIcon,
  ColorSwatchIcon,
  KeyIcon,
  LinkIcon,
  ExternalLinkIcon,
  ExclamationIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  CubeTransparentIcon,
  MenuIcon,
  CollectionIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Responsividade',
    description:
      'Sua aplicação web deve ser responsiva, logo, deve ser acessível para abrir em celulares, tablets e desktop.',
    icon: DeviceMobileIcon,
  },
  {
    name: 'Testes sem o CSS carregado',
    description:
      'Uma das formas de testar a acessibilidade em seu site é realizar a execução da navegação com o CSS Desabilitado.',
    icon: EyeOffIcon,
  },
  {
    name: 'Excesso de movimentos e efeitos',
    description:
      'Evite que as páginas de seu projeto tenham excesso de movimentos e efeitos quando acessada a pagina ou navegando pela pagina.',
    icon: TrendingDownIcon,
  },
  {
    name: 'Testes sem JavaScript ativado',
    description:
      'Realizar teste para observar se os links da aplicação funcionam sem o Javascript habilitado no navegador.',
    icon: CodeIcon,
  },
  {
    name: 'Repetição de cores & transparência',
    description:
      'Evite usar tom de cores próximos, bem semelhante, com pouca diferencia e também evite o uso de transparência no site.',
    icon: ColorSwatchIcon,
  },
  {
    name: 'Navegação via teclado',
    description:
      'Torne possível navegar pela sua aplicação web utilizando as teclas tab, shift-tab e return',
    icon: KeyIcon,
  },
  {
    name: 'Link acessados',
    description:
      'Destaque os links já visitados com cores diferentes se possível - semelhante ao que é feito pela Google',
    icon: LinkIcon,
  },
  {
    name: 'Link é diferente de texto',
    description:
      'Não sublinhe os textos que não possuam link e/ou navegação para outra página',
    icon: ExternalLinkIcon,
  },
  {
    name: 'Diga não ao Pop-up',
    description:
      'Evite a utilização de popup na seu site, use somente em caso extremo, ou que trabalhe com uma acessibilidade especializada só para o popup.',
    icon: ExclamationIcon,
  },
  {
    name: 'Textos simples e diretos',
    description:
      'Trabalhe na hierarquia de informação do conteúdo de sua aplicação, trabalhe com textos simples e diretos.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Navegadores',
    description:
      'Teste seu projeto em navegadores que são os mais acessados pela pessoas, como de exemplo o Chrome, Firefox, Edge e Safari.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Uso de CAPTCHA',
    description:
      'Evite utilizar o famoso CAPTCHA com apenas imagens. Utilize essa verificação com som e perguntas simples.',
    icon: CubeTransparentIcon,
  },
  {
    name: 'Menu Dropdown',
    description:
      'Evite trabalhar com submenus. Caso isso seja necessário, que possa ser acessível utilizando a navegação via teclado.',
    icon: MenuIcon,
  },
  {
    name: 'Listas',
    description:
      'Se sua aplicação tiver lista, inserir marcadores de identificação de itens dessa lista.',
    icon: CollectionIcon,
  },
];

export function Tips() {
  return (
    <>
      <Header />
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              "Se o lugar não permitir o acesso a todas as pessoas, esse lugar é
              deficiente"
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Dicas para um projeto acessível para todos
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Segue nossas dicas abaixo, sobre a construção de uma aplicação
              focada para ser acessível para todos.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
