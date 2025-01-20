import { HttpInterceptorFn } from '@angular/common/http';

export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Interceptor executed');
  const clonedRequest = req.clone({
    setHeaders: {
      Cookie:
        'TS01187464=01ff76f956c2dd3eb77a07fed372b05f978d397e7079afea9dd9c8dbb5293c5755463813c049007fd2dbbd7be28586b836fd5cca2bc7713aaf34ce94f2eec2434ce5f47d4c; _hal_session=xKErte%2FDxyKU6V09vFR6h2HBE1LW2Hm7F1dl%2FzPyAso9OfHhnZBBRlhshA1Bmn%2FKAnbFWeVbXzfMypjGIWWc9Jht1Xnpj%2BcBMVR2N9CnkDUfPu3lkucc5Dkkq8yv63ZvwS04pEi88mOwEyb5z%2FrM0w9YXiFcn4e%2Bu5KuQKrb1fEYCgsEVbv6qlaaFHjDcA2L721aThKJLcW4OBEqHaPbEDm4e60Lin3gjK6RdmpmK9Wl9kloQ24pozGgmcZqitwY8fF%2FHy1iIpx2767gmYct6DWMiLr71Q36c5DoYuvc%2B4GrOI4SNd6s4pYtpbey9Kc9kBkJ5%2F1UHHL9c6yWwGnFV5589yzU0Tws6Oyogv18OV2EN2UJEMN46EwkJtTGWmeAB8u0qrlMv7%2FCuCwX%2FyAV4OXNDhUyNgTQga3rDq3qRW%2FbXc5NwmgVFzeiRbmar2A5MG9D%2BUlL1eE%3D--RxmijBg0C0pgT8tk--LgKcX3eORlHiumidkjhXEQ%3D%3D',
    },
  });
  console.log('Cloned Request:', clonedRequest);
  return next(clonedRequest);
};
