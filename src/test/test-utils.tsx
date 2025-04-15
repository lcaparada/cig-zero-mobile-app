import { ThemeProvider } from "@shopify/restyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RenderOptions, render } from "@testing-library/react-native";
import { theme } from "@theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

function customRender<T = unknown>(
  component: React.ReactElement<T>,
  options?: Omit<RenderOptions, "wrapper">
) {
  return render(component, { wrapper: AllTheProviders, ...options });
}

export * from "@testing-library/react-native";
export { customRender as render };
