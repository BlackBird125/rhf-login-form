import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchSchema = z.object({
  searchTerm: z
    .string()
    .min(1, "検索語を入力してください")
    .max(50, "検索語は50文字以内で入力してください"),
  category: z.enum(["all", "users", "posts", "comments"], {
    required_error: "カテゴリーを選択してください",
  }),
});

type SearchFormData = z.infer<typeof searchSchema>;

export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      category: "all",
    },
  });

  const onSubmit = (data: SearchFormData) => {
    console.log("Search submitted:", data);
    // ここで実際の検索処理を実装
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">検索</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="searchTerm"
            className="block text-sm font-medium text-gray-700"
          >
            検索語
          </label>
          <input
            type="text"
            id="searchTerm"
            {...register("searchTerm")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="検索したいキーワードを入力"
          />
          {errors.searchTerm && (
            <p className="mt-1 text-sm text-red-600">
              {errors.searchTerm.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            カテゴリー
          </label>
          <select
            id="category"
            {...register("category")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="all">すべて</option>
            <option value="users">ユーザー</option>
            <option value="posts">投稿</option>
            <option value="comments">コメント</option>
          </select>
          {errors.category && (
            <p className="mt-1 text-sm text-red-600">
              {errors.category.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          検索
        </button>
      </form>
    </div>
  );
};
