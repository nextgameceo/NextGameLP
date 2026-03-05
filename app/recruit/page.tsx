<ul className={styles.positionList}>
  {data.contents.map((item) => (
    <li key={item.id} className={styles.positionItem}>
      <h3>{item.role}</h3>

      {/* 仕事内容（リッチテキスト） */}
      {item.job_description && (
        <div
          dangerouslySetInnerHTML={{
            __html: item.job_description,
          }}
        />
      )}

      {/* 給与（リッチテキスト） */}
      {item.salary && (
        <div
          dangerouslySetInnerHTML={{
            __html: item.salary,
          }}
        />
      )}

      {item.capacity && <p>募集人数：{item.capacity}</p>}
      {item.working_hours && <p>勤務時間：{item.working_hours}</p>}
    </li>
  ))}
</ul>
