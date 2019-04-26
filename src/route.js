export default function route(page) {
  switch (page) {
    case 'setting':
      import('./pages/setting')
      return page
  }
}
