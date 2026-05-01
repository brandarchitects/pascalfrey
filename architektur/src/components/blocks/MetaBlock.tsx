import { Eyebrow } from "../ui/Eyebrow";

export interface MetaItem {
  label: string;
  value: string | string[];
}

export function MetaBlock({ items }: { items: MetaItem[] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-y border-chalk py-8 sm:grid-cols-4">
      {items.map((item) => (
        <div key={item.label}>
          <dt>
            <Eyebrow variant="fh">{item.label}</Eyebrow>
          </dt>
          <dd className="mt-3 text-[16px] font-medium text-obsidian">
            {Array.isArray(item.value) ? (
              <ul className="flex flex-wrap gap-2">
                {item.value.map((v) => (
                  <li
                    key={v}
                    className="rounded-full border border-chalk px-3 py-1 text-[13px] font-medium text-obsidian"
                  >
                    {v}
                  </li>
                ))}
              </ul>
            ) : (
              item.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
