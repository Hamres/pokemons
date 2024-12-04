type RequestParams<Params> = Params

interface RequestQueryParams<Params = {}> {
  params: Params
  config?: import('react-query').QueryObserverOptions<any, any, any, any, any>
}

interface RequestQuerySettings<Func = {}> {
  config?: import('axios').AxiosRequestConfig;
  options?: import('react-query').UseQueryOptions<
    Awaited<ReturnType<Func>>,
    any,
    Awaited<ReturnType<Func>>,
    any
  >;
}

interface RequestInfinityQuerySettings<Func = {}> {
  config?: import('axios').AxiosRequestConfig;
  options?: import('react-query').UseInfiniteQueryOptions<
    Awaited<ReturnType<Func>>,
    any,
    Awaited<ReturnType<Func>>,
    Awaited<ReturnType<Func>>,
    any
  >;
}